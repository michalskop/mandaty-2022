"""Presidential polls 2nd round."""

import pandas as pd

app_path = "frontend/assets/data/"

url_polls = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=325071040&single=true&output=csv"
url_models = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmWwVHMSkcPS691uB39ZoO499F5wewcAzn7Ee5x_p0bm7U5TRcOtgcU7QsEQWD891bPuUSF7toO8tQ/pub?gid=2068024448&single=true&output=csv"

polls = pd.read_csv(url_polls)
models = pd.read_csv(url_models)

polls = pd.read_csv(url_polls)
models = pd.read_csv(url_models)

t = models.merge(polls, left_on=['poll:identifier', 'pollster:id'], right_on=['identifier', 'pollster:id'])

t.loc[:, 'value1'] = t.loc[:, 'value1'].str.strip('%').astype(float)
t.loc[:, 'value2'] = t.loc[:, 'value2'].str.strip('%').astype(float)

t = t.sort_values(['middle_date', 'value1'], ascending=[False, False])

t.to_json(app_path + "president/president_2_polls_table.json", orient='records')
