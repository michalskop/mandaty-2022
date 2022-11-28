"""Presidential polls 2nd round."""

import pandas as pd

app_path = "frontend/assets/data/"

url_polls = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=325071040&single=true&output=csv"
url_models = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=2068024448&single=true&output=csv"

# polls = pd.read_csv(url_polls)
# models = pd.read_csv(url_models)

polls = pd.read_csv(url_polls)
models = pd.read_csv(url_models)

# Mandaty table
t = models.merge(polls, left_on=['poll:identifier', 'pollster:id'], right_on=['identifier', 'pollster:id'])

t.loc[:, 'value1'] = t.loc[:, 'value1'].str.strip('%').astype(float)
t.loc[:, 'value2'] = t.loc[:, 'value2'].str.strip('%').astype(float)

t = t.sort_values(['middle_date', 'value1'], ascending=[False, False])

t.to_json(app_path + "president/president_2_polls_table.json", orient='records')

# models
#
selected = [
  ['Petr Pavel', 'Andrej Babiš'],
  ['Danuše Nerudová', 'Andrej Babiš']
] 
since = '2022-09-01'
election_date = '2023-01-13'
ts = t[t['middle_date'] >= since].sort_values('middle_date')

races = []
for s in selected:
  r = ts[(ts['choice:id1'] == s[0]) & (ts['choice:id2'] == s[1])].copy()
  r['value'] = r.loc[:, 'value1']
  r2 = ts[(ts['choice:id1'] == s[1]) & (ts['choice:id2'] == s[0])].copy()
  r2.loc[:, 'value'] = r2.loc[:, 'value2']
  r = pd.concat([r, r2])
  r = r.sort_values('middle_date')
  r['p'] = r['value'] / ((r['value1'] + r['value2']) / 100)
  r['days_to_elections'] = (pd.to_datetime(election_date) - pd.to_datetime(r['middle_date'])).dt.days
  races.append(r)

# for every 7th day
out = []
for race in races:
  mas = pd.DataFrame()
  for dte in range(0, 135, 7):
    weights = (1 / 2) ** (abs(race['days_to_elections'] - dte) / 15)
    moving_average = race.loc[:, 'p'].mul(weights, axis=0).sum() / weights.sum()
    item = {'days to elections': dte, 'p': moving_average}
    it = pd.DataFrame([item])
    mas = pd.concat([mas, it], axis=0)
  out.append(mas.reset_index(drop=True))

