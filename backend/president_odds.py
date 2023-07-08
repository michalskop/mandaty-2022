"""Probabilities from Tipsport bets."""

import datetime
import json
import pandas as pd
import plotly.graph_objects as go
import numpy as np
import re

url = "https://raw.githubusercontent.com/michalskop/ifortuna.cz/master/daily/MCZ41359.csv"

assets_path = "frontend/assets/"
public_path = "frontend/public/shares/"
flourish_path = "backend/data/"

election_date = '2028-01-28'

df = pd.read_csv(url)

# remove 'muž' and 'žena' from names
del df['muž']
del df['žena']

# calculate probabilities, cut-off all with odds > 1/sum(odd) (100, but adjusted for company's margin)
limit = 100
current_data = df.iloc[-1, 1:].T.to_frame().reset_index()
current_data.columns = ['name', 'odd']

current_data_1_psum = (1 / current_data['odd'].apply(lambda x: 1 / x).sum())
current_data['p_raw'] = np.where(current_data['odd'] < (current_data_1_psum * limit), 1 / current_data['odd'], 0)
current_data['p'] = current_data['p_raw'] / current_data['p_raw'].sum()
current_data['perc'] = (current_data['p'] * 100)
current_data['perc'] = current_data['perc'].apply(lambda x: round(x, 1))

# prepare output
out = current_data[current_data['perc'] >= 1]
out = out.sort_values(by='perc', ascending=False)
out = out.loc[:, ['name', 'perc']]
out['perc_floor'] = out['perc'].apply(lambda x: int(np.floor(x)))
out['perc_tens'] = ((out['perc'] - out['perc_floor']) * 10).astype(int)
tmp = out['name'].str.split(' ')
out['family_name'] = tmp.apply(lambda x: ' '.join(x[1:]))
out['other_names'] = tmp.apply(lambda x: x[0])

# save
out.to_json(assets_path + "data/president2028/president2028_current_odds.json", orient='records')

# last date
last_date = pd.DataFrame([{'date': df.iloc[-1][0]}])
last_date.to_json(assets_path + "data/president2028/president2028_current_odds_date.json", orient='records')

#
# prepare flourish + plotly charts
chart_data_raw = df.loc[:, out['name']]
chart_data = (1 / chart_data_raw / current_data['p_raw'].sum()).apply(lambda x: round(x, 3))
# hotfixing https://github.com/michalskop/mandaty-sk-2023/issues/1
chart_data = chart_data.apply(lambda row: row / row.sum() if row.sum() > 1 else row, axis=1)

# flourish
flourish_data = (chart_data * 100).apply(lambda x: round(x, 1))
nice_dates = df['date'].apply(lambda x: str(datetime.datetime.fromisoformat(x).day) + ". " + str(datetime.datetime.fromisoformat(x).month) + ". " + datetime.datetime.fromisoformat(x).strftime("%y"))
flourish_data.insert(0, 'date', nice_dates)
flourish_data.to_csv(flourish_path + "president2028_odds_history.csv", index=False)

# plotly
fig = go.Figure()
for name in chart_data:
  fig.add_trace(go.Scatter(
    x=df['date'],
    y=chart_data[name],
    mode='lines',
    name=name,
    line=dict(
      width=5
    )
  ))

# note: did not work with locale
fig.update_xaxes(tickformat="%-d.%-m.%y")
fig.update_layout(template='plotly_white')
fig.layout.yaxis.tickformat = ',.0%'
fig.update_xaxes(range=[df['date'][0], election_date])
fig.update_layout(
    autosize=False,
    width=1200,
    height=600,
    margin=dict(
        l=50,
        r=20,
        b=50,
        t=20,
        pad=0
    ),
)
fig.update_yaxes(rangemode="tozero")
fig.write_image(assets_path + "image/president2028_odds_history.svg")

fig.update_layout(
    autosize=False,
    width=400,
    height=400,
    margin=dict(
        l=50,
        r=20,
        b=50,
        t=20,
        pad=0
    ),
)
fig.write_image(assets_path + "image/president2028_odds_history_small.svg")

# prepare plotly thumbnail
fig = go.Figure()
for name in chart_data.iloc[:, 0:5]:
  fig.add_trace(go.Scatter(
    x=df['date'],
    y=chart_data[name],
    mode='lines',
    name=name,
    line=dict(
      width=5
    )
  ))

# note: did not work with locale
fig.update_xaxes(tickformat="%-d.%-m.%y")
fig.update_layout(template='plotly_white')
fig.layout.yaxis.tickformat = ',.0%'
# fig.update_xaxes(range=[df['date'][0], election_date])
fig.update_layout(
    title="Prezident/ka ČR 2028",
    titlefont=dict(
      family='Ubuntu, verdana, arial, sans-serif',
      size=16,
      color='#e95420'
    ),
    autosize=False,
    width=300,
    height=135,
    showlegend=False,
    margin=dict(
        l=10,
        r=10,
        b=10,
        t=50,
        pad=0
    ),
)
fig.update_yaxes(rangemode="tozero")
fig.update_xaxes(showticklabels=False)
fig.update_yaxes(showticklabels=False)
# fig.update_xaxes(visible=False)
fig.write_image(assets_path + "image/president2028_thumbnail.svg")

# prepare plotly sharing picture
fig = go.Figure()
for name in chart_data.iloc[:, 0:5]:
  fig.add_trace(go.Scatter(
    x=df['date'],
    y=chart_data[name],
    mode='lines',
    name=name,
    line=dict(
      width=5
    )
  ))

# note: did not work with locale
fig.update_xaxes(tickformat="%-d.%-m.%y")
fig.update_layout(template='plotly_white')
fig.layout.yaxis.tickformat = ',.0%'
fig.update_yaxes(rangemode="tozero")
# fig.update_xaxes(range=[df['date'][0], election_date])
fig.update_layout(
    # plot=dict(
    #   bgcolor="#772953"
    # ),
    
    font=dict(
      family='Ubuntu, verdana, arial, sans-serif',
      color="#bbb",
      size=30
    ),
    title=dict(
      text="Mandáty.cz: Prezident/ka ČR 2028",
      font=dict(
        color="#772953",
        size=45,
        # bgcolor="#772953"
      )
    ),
    autosize=False,
    width=1000,
    height=500,
    # showlegend=False,
    margin=dict(
        l=80,
        r=80,
        b=10,
        t=150,
        pad=0
    ),
    legend=dict(
      font=dict(
        size=35,
        family='Ubuntu',
        color="#888",
      ),
    ),
    # paper_bgcolor="#772953",
)
# fig.update_xaxes(visible=False)

# fig.add_annotation(x=35000, y=0.1,
#             text="Mandáty.cz",
#             showarrow=False)

d = datetime.datetime.now().isoformat()
filename = public_path + d + "_president2028.png"

with open(assets_path + "data/president2028/president2028_share_image.json", "w") as fout:
  dd = {
    'filename': "shares/" + d + "_president2028.png"
  }
  json.dump(dd, fout)

fig.write_image(filename)



#
# prepare data for mandaty echart
# chart_data_raw = df.loc[:, out['name']]
# chart_data = (1 / chart_data_raw / current_data['p_raw'].sum()).apply(lambda x: round(100 * x, 1))
# echart = []
# n = out['name'][0]
# for n in out['name']:
#   columns = {
#     'date': df['date'],
#     'value': chart_data[n]
#   }
#   echart.append(
#     {
#       'name': n,
#       'data': pd.concat(columns, axis=1).fillna('').reset_index(drop=True).values.tolist()
#     }
#   )
# with open(assets_path + "data/president/president_odds.json", "w") as fout:
#   json.dump(echart, fout)