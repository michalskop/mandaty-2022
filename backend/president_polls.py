"""Presidential polls."""

# Manually update https://docs.google.com/spreadsheets/d/1jQYnndcOqY_zkY6VXpY-8HcNUUcRDF54Kn4QYetYX4k/edit#gid=2048560562

import datetime
import gspread
import pandas as pd

# Mandaty.cz
app_path = "frontend/assets/data/"

url_polls = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=325071040&single=true&output=csv"
url_models = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=1112064865&single=true&output=csv"

polls = pd.read_csv(url_polls)
models = pd.read_csv(url_models)

groupby = ['poll:identifier', 'pollster:id', 'choice:id']
t = models.groupby(groupby)['value'].sum().unstack().reset_index()
# t.columns
# t.index

tm = polls.merge(t, left_on=['identifier', 'pollster:id'], right_on=['poll:identifier', 'pollster:id'])
tm = tm.sort_values('middle_date', ascending=False)
tm.loc[:, t.columns[2:]] = tm.loc[:, t.columns[2:]].apply(lambda x: x.str.strip('%').astype(float))

tms = tm.loc[:, t.columns[2:]].sort_values([tm.index[0], tm.index[1], tm.index[2]], axis=1, ascending=False)

out = tm.loc[:, tm.columns[0: len(tm.columns) - len(t.columns[2:]) - 1]].join(tms)

out.to_json(app_path + "president/president_polls_table.json", orient='records')

out2 = []
for c in tms.columns:
  if c[0].isupper():
    out2.append(c)

names = pd.DataFrame([{'names': out2}])
names.to_json(app_path + "president/president_polls_table_candidates.json", orient='records')

## Flourish
election_date = '2023-01-13'
sheetkey = "1jQYnndcOqY_zkY6VXpY-8HcNUUcRDF54Kn4QYetYX4k"
sheetname = "2023-1"
election_day = datetime.datetime.fromisoformat(election_date)

# GSheet
gc = gspread.service_account()
sh = gc.open_by_key(sheetkey)

# Get worksheet
worksheet = sh.worksheet(sheetname)
df = pd.DataFrame(worksheet.get_all_records())
df = df.loc[1:, :]
df.replace("", pd.NA, inplace=True)

col = df.columns.get_loc("last_updated")
selected = list(df.columns)[col + 1 :]

# for every 7th day
mas = pd.DataFrame()
for dte in range(0, 135, 7):
  weights = (1 / 2) ** (abs(df['days to elections'] - dte) / 15)
  moving_average = df.loc[:, selected].mul(weights, axis=0).sum() / weights.sum()
  item = {'days to elections': dte, **moving_average}
  it = pd.DataFrame([item])
  mas = pd.concat([mas, it], axis=0)

# write to Gsheet
sheetname = sheetname + "-model"
wsw = sh.worksheet(sheetname)
wsw.update([mas.columns.values.tolist()] + mas.values.tolist())

# last date to include into the chart
lday = datetime.datetime.fromisoformat(df['middle_date'].max()) + datetime.timedelta(days=7) 
mas['date'] = pd.date_range(start=election_day, periods=len(mas), freq='-7D')
mas = mas.loc[mas['date'] <= lday, :]

# output table
header = ['datum', 'kandidát/ka', 'model', 'velikost', 'agentura', 'kandidát', 'agentura1']
out = pd.DataFrame(columns=header)

# measured values
for row in df.iterrows():
  for c in selected:
    item = {'datum': row[1]['middle_date'], 'kandidát/ka': c, 'model': row[1][c], 'velikost': 2, 'agentura': row[1]['pollster:id'], 'kandidát': '', 'agentura1': 'agentura'}
    out = out.append(item, ignore_index=True)
