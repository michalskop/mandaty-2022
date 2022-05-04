"""Presidential polls."""

import pandas as pd

app_path = "frontend/assets/data/"

url_polls = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=325071040&single=true&output=csv"
url_models = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=1112064865&single=true&output=csv"

polls = pd.read_csv(url_polls)
models = pd.read_csv(url_models)

groupby = ['poll:identifier', 'pollster:id', 'choice:id']
t = models.groupby(groupby)['value'].sum().unstack().reset_index()
t.columns
t.index

tm = polls.merge(t, left_on=['identifier', 'pollster:id'], right_on=['poll:identifier', 'pollster:id'])
tm = tm.sort_values('middle_date', ascending=False)
tm.loc[:, t.columns[2:]] = tm.loc[:, t.columns[2:]].apply(lambda x: x.str.strip('%').astype(float))

tms = tm.loc[:, t.columns[2:]].sort_values([tm.index[0], tm.index[1], tm.index[2]], axis=1, ascending=False)

out = tm.loc[:, tm.columns[0: len(tm.columns) - len(t.columns[2:]) - 1]].join(tms)

out.to_json(app_path + "president/president_bets_table.json", orient='records')

out2 = []
for c in tms.columns:
  if c[0].isupper():
    out2.append(c)

names = pd.DataFrame([{'names': out2}])
names.to_json(app_path + "president/president_bets_table_candidates.json", orient='records')