"""EP elections."""

from calendar import month
import datetime
import json
import math
import pandas as pd
import plotly.graph_objects as go
import numpy as np
from scipy.spatial import distance
from scipy.stats import binom

source_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGYEwi4aU63hMu8CDD614O23H2pdAll0Ofm77K4-sjsEZmRME0j9T_k0elKaqmcmTf-RJHeeYGU1xs/pub?gid=0&single=true&output=csv"
choices_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGYEwi4aU63hMu8CDD614O23H2pdAll0Ofm77K4-sjsEZmRME0j9T_k0elKaqmcmTf-RJHeeYGU1xs/pub?gid=302501468&single=true&output=csv"

assets_path = "frontend/assets/"
public_path = "frontend/public/shares/"
app_path = "frontend/assets/data/"
flourish_path = "backend/data/"
data_path = "backend/data/"

source = pd.read_csv(source_url)
choices = pd.read_csv(choices_url)

others = 'jiné strany'

# parameters:
include_limit = 0.03
include_current3_limit = 0.02
include_election_limit = 0.05

sample_n = 333  # basic sample size

runs = 1000  # number of runs

coef = 2 # coefficient * sd (other error)

election_date = '2024-06-08'

# find Unnamed: x column
cn = 0
for i in range(len(source.columns)):
  if source.columns[i].find('Unnamed:') >= 0:
    cn = i      

# filter - not used: only parties, not coalitions
source1 = source  # source[source['tags'] == 'parties']
middle_dates = source1['middle_date']

# sort by middle_date
source1 = source1.sort_values(by='middle_date')

# parties, filter out coalitions
allvaluesp = source1.iloc[:, (cn + 1):]
allvaluesp = allvaluesp.dropna(axis=1, how='all')
# selected_indeces = allvaluesp.index

# change % to values
allvalues = allvaluesp.apply(lambda x: x.str.rstrip('%').astype('float') / 100.0, axis=0)

# remove others
allvalues = allvalues.drop(others, axis=1)

# find max values
maxvalues = allvalues.max(axis=0)
maxvalueselection = allvalues.iloc[0, :]
if len(allvalues) >= 3:
  maxvalues3 = allvalues.iloc[-3:-1, :].max(axis=0)
selected_parties = maxvalues[((maxvalues > include_limit) & (maxvalues3 > include_current3_limit)) | (maxvalueselection >= include_election_limit)].index
selected_values = allvalues[selected_parties]

# correlations
corr = allvalues.loc[:, selected_parties].corr()
corr = corr.fillna(0)

# mu, sigma
# dates distance matrix
d = source1.loc[:, ['middle_date']].apply(lambda x: pd.to_datetime(x))
dd = pd.DataFrame((d - d.min()).loc[:, 'middle_date'].dt.days)
distances = pd.DataFrame(distance.cdist(dd, dd), index=d.loc[:, 'middle_date'], columns=d.loc[:, 'middle_date'])
# distances.drop_duplicates(inplace=True)
# distances.T.drop_duplicates(inplace=True)
# weight matrix
# w = pow(distances, 1/30) * 30
w = 1 / np.exp(distances / 30)
ws = w.sum(axis=1)
# weighted values - mu
# replacing missing values with 0
mu1 = pd.DataFrame(np.matmul(np.matrix(w), np.matrix(selected_values.fillna(0)))).divide(np.asarray(ws), axis=0)
mu1.columns = selected_parties
mu1.index = w.index
selected_values.index = mu1.index
V_zero = selected_values.fillna(0)
# V_zero.index = selected_values.index
row_sums = w.dot(V_zero.notna().values.astype(int))
row_sums.columns = V_zero.columns
Z = np.matmul(np.matrix(w), np.matrix(V_zero))
Z.columns = V_zero.columns
mu = Z / row_sums
mu.columns = selected_values.columns
mu.index = selected_values.index
mu = mu.where(~selected_values.isna(), np.nan)
mu.index = selected_values.index

# replace first value with election value
mu.iloc[0, :] = selected_values.iloc[0, :]

mun = mu1 * sample_n
mun.columns = selected_parties
# sigma
sigman = np.sqrt(mu1 * (1 - mu1) * sample_n)

# dHondt
def dHondt(sample):
  """ d'Hondt. """
  # sample DF: 
  # party, value
  # return DF:
  # columns: parties, values: seats
  # A, B, C, ... -> 1, 2, 0, ...
  nmps = 21
  samplex = sample.copy()
  samplex = sample.merge(choices, left_on="party", right_on="id", how="left")
  samplex.loc[:, 'value'] = samplex.apply(lambda row: row['value'] if row['value'] >= row['needs'] else 0, axis=1)
  dhvalues = pd.DataFrame(columns=['party', 'value'])
  for j in range(1, nmps + 1):
    dhitem = samplex.loc[:, ['party', 'value']]
    dhitem['value'] = dhitem['value'] / j
    dhvalues = pd.concat([dhvalues, dhitem], ignore_index=True)
  dhvalues.sort_values(by='value', ascending=False, inplace=True)
  dhvalues = dhvalues.iloc[0:nmps, :]
  dhvalues_df = pd.DataFrame(dhvalues.groupby('party').size(), columns=['seats']).sort_values(by='seats', ascending=False)
  dhvalues_dft = dhvalues_df.T
  return dhvalues_dft

# estimates
# last row
m = mun.loc[mun.index.max()] 
diagonal = np.diag(sigman.iloc[0]) * coef
cov = np.matmul(np.matmul(diagonal, corr), diagonal)
samples = pd.DataFrame(np.random.multivariate_normal(m, cov, runs) / sample_n)
samples.columns = selected_parties

estimates = pd.DataFrame(columns=selected_parties)
for i in range(runs):
  sample = samples.iloc[i].reset_index()
  sample.columns = ['party', 'value']
  estimates = pd.concat([estimates, dHondt(sample)], ignore_index=True)

estimates = estimates.fillna(0)

# seats - best estimate
ms = m.reset_index().rename(columns={'index': 'party', mun.index.max(): 'value'})
ms.loc[:, 'value'] = ms['value'] / sample_n
seats = dHondt(ms).fillna(0)

# stats
stats = pd.DataFrame(index=selected_parties)
stats['party'] = selected_parties
stats['median'] = estimates.median(0)
stats['lo'] = estimates.quantile(q=0.05, interpolation='nearest')
stats['hi'] = estimates.quantile(q=0.95, interpolation='nearest')
stats['in'] = (estimates > 0).sum() / runs

stats = stats.merge(choices, left_on="party", right_on="id", how="left")
stats = stats.merge(seats.T, on="party")

stats['difference'] = stats['seats'] - stats['mps'].replace(np.nan, 0)

stats = stats.sort_values(['seats', 'hi', 'lo'], ascending=[False, False, False])

stats = stats.fillna(0)


stats.to_json(assets_path + "data/ep2024/stats.json", force_ascii=False, orient='records')

with open(assets_path + "data/ep2024/current_seats.json", "w") as fout:
  rich = {
    "data": stats[stats['hi'] > 0].to_dict(orient='records'),
    "date": d.max()['middle_date'].isoformat()[0:10]
  }
  json.dump(rich, fout, ensure_ascii=False)


#
# prepare flourish + plotly charts
mu.sort_values([mu.index.max()], ascending=False, axis=1, inplace=True)
mu.sort_index(inplace=True)
# if last value is NaN, set it to the last non-NaN value
for col in mu.columns:
  mu[col].fillna(method='ffill', inplace=True)
allvalues.index = middle_dates
allvalues.sort_index(inplace=True)
middle_dates = allvalues.index.tolist()

# lo + hi: 
lo = binom.ppf(0.05, sample_n, mu) / sample_n
hi = binom.ppf(0.95, sample_n, mu) / sample_n
lo = coef * lo - mu  # lo + (lo - mu)
hi = coef * hi - mu  # hi + (hi - mu)

# interactive Plotly chart data
dataPlotly = {
  'mu': {},
  'lo': {},
  'hi': {},
  'allvalues': {},
  'middle_dates': middle_dates,
  'choices': choices.fillna(0).to_dict(orient='records'),
  'election_date': election_date
}

for name in mu:
  dataPlotly['mu'][name] = mu[name].replace(np.nan, None).tolist()
  dataPlotly['lo'][name] = lo[name].replace(np.nan, None).tolist()
  dataPlotly['hi'][name] = hi[name].replace(np.nan, None).tolist()
  dataPlotly['allvalues'][name] = allvalues[name].replace(np.nan, None).tolist()

with open(assets_path + "data/ep2024/data.json", "w") as fout:
  json.dump(dataPlotly, fout, ensure_ascii=False)

def _html2rgba(html, a):
  html = html.strip().strip('#')
  return 'rgba({}, {}, {}, {})'.format(int(html[0:2], 16), int(html[2:4], 16), int(html[4:6], 16), a)
  # return 'rgba(' + ','.join(map(str, a)) + ')'

# plotly
# main chart
fig = go.Figure()
x = mu.index.tolist()
x_rev = mu.index[::-1].to_list()
for name in mu:
  try:
    color = choices[choices['id'] == name].iloc[0]['color']
  except:
    color = '#BBBBBB'
  hi_same = hi[name].to_list()
  lo_rev = lo[name][::-1].to_list()
  fig.add_trace(go.Scatter(
    x=x+x_rev,
    y=hi_same+lo_rev,
    fill='toself',
    fillcolor=_html2rgba(color, 0.05),
    line_color='rgba(255, 255, 255, 0)',
    line_shape='spline',
    showlegend=False,
    name=name
  ))
for name in mu:
  try:
    color = choices[choices['id'] == name].iloc[0]['color']
  except:
    color = '#BBBBBB'
  if mu[name].iloc[-1] > 0:
    name_perc = str(round(mu[name].iloc[-1] * 100)) + '%'
  else:
    name_perc = ''
  fig.add_trace(go.Scatter(
    x=x,
    y=mu[name],
    mode='lines',
    line_shape='spline',
    name=name + ": " + name_perc,
    line=dict(
      width=7,
      color=color
    )
  ))
  fig.add_trace(go.Scatter(
    x=x,
    y=allvalues[name],
    mode='markers',
    name=name,
    showlegend=False,
    marker_color=_html2rgba(color, 0.25),
    marker_size=15
  ))

# note: did not work with locale
fig.update_xaxes(tickformat="%-d.%-m.%y")
fig.update_layout(template='plotly_white')
fig.layout.yaxis.tickformat = ',.0%'
fig.update_xaxes(range=[mu.index[0], election_date])
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
fig.write_image(assets_path + "image/ep2024_polls_history.svg")

# small main chart - continuing from above
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
fig.write_image(assets_path + "image/ep2024_polls_history_small.svg")

# thumbnail
fig = go.Figure()
for name in mu.iloc[:, 0:5]:
  try:
    color = choices[choices['id'] == name].iloc[0]['color']
  except:
    color = '#BBBBBB'
  if mu[name].iloc[-1] > 0:
    name_perc = str(round(mu[name].iloc[-1] * 100)) + '%'
  else:
    name_perc = ''
  fig.add_trace(go.Scatter(
      x=x,
      y=mu[name],
      mode='lines',
      line_shape='spline',
      name=name + ": " + name_perc,
      line=dict(
        width=5,
        color=color
      )
    ))

# note: did not work with locale
fig.update_xaxes(tickformat="%-d.%-m.%y")
fig.update_layout(template='plotly_white')
fig.layout.yaxis.tickformat = ',.0%'
# fig.update_xaxes(range=[df['date'][0], election_date])
fig.update_layout(
  title="Evropský parlament / ČR 2024",
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
fig.write_image(assets_path + "image/ep2024_thumbnail.svg")

# sharing picture
fig = go.Figure()
for name in mu.iloc[:, 0:5]:
  try:
    color = choices[choices['id'] == name].iloc[0]['color']
  except:
    color = '#BBBBBB'
  if mu[name].iloc[-1] > 0:
    name_perc = str(round(mu[name].iloc[-1] * 100)) + '%'
  else:
    name_perc = ''
  fig.add_trace(go.Scatter(
      x=x,
      y=mu[name],
      mode='lines',
      line_shape='spline',
      name=name + ": " + name_perc,
      line=dict(
        width=5,
        color=color
      )
    ))

# note: did not work with locale
fig.update_xaxes(tickformat="%-d.%-m.%y")
fig.update_layout(template='plotly_white')
fig.layout.yaxis.tickformat = ',.0%'
fig.update_yaxes(rangemode="tozero")

fig.update_layout(
    font=dict(
      family='Ubuntu, verdana, arial, sans-serif',
      color="#bbb",
      size=30
    ),
    title=dict(
      text="Mandáty.cz: EP ČR 2024",
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
        family='Ubuntu, verdana, arial, sans-serif',
        color="#888",
      ),
    ),
    # paper_bgcolor="#772953",
)

d = datetime.datetime.now().isoformat()
filename = public_path + d + "_ep2024.png"

with open(assets_path + "data/ep2024/ep2024_share_image.json", "w") as fout:
  dd = {
    'filename': "shares/" + d + "_ep2024.png"
  }
  json.dump(dd, fout)

fig.write_image(filename)


# FLOURISH
# 
# First chart - current overview
# https://public.flourish.studio/visualisation/10393920/
# we want to use the special coalitions here
chartdata = pd.DataFrame(round(mu.iloc[-1] * 100).astype(int)).T
chartdata.insert(0, 'Region name', 'ČR')
chartdata.reset_index(drop=True).to_csv(flourish_path + "ep2024_polls_current_overview.csv", index=False)

# Full chart
# https://public.flourish.studio/visualisation/10768917/
# averages
pollsters = source1['pollster:id'].unique()

mus = mu.unstack().reset_index()
mus.columns = ['Průměr', 'Datum', 'Hodnota']
mus['Strana'] = mus['Průměr']

muses = []
for pollster in pollsters:
  item = mus.copy()
  item['Agentura'] = pollster
  muses.append(item)

fulldata = pd.concat(muses).sort_values(by=['Datum', 'Strana']).reset_index(drop=True).loc[:, ['Agentura', 'Datum', 'Hodnota', 'Průměr', 'Strana']]
fulldata['size'] = 1
fulldata = fulldata.astype({'Datum': str})

# measured values
source1.loc[:, ['pollster:id', 'middle_date']]
vals = allvalues.copy()
vals.index = source1.loc[:, ['pollster:id', 'middle_date']]
valss = vals.unstack().reset_index()
valss.columns = ['Strana', 'level_1', 'Hodnota']
valss = valss.join(pd.DataFrame(valss['level_1'].values.tolist()))
valss.columns = ['Strana', 'level_1', 'Hodnota', 'Agentura', 'Datum']
valss['size'] = (valss['Agentura'] == 'volby+STEM') * 6 + 6
valss['Průměr'] = pd.NA
valss = valss.astype({'Datum': str})

concats = [fulldata, valss.loc[:, fulldata.columns]]

fchart = pd.concat(concats)
fchart.to_csv(flourish_path + "ep2024_polls_fchart.csv", index=False)

# TABLES
# parties
# source1 = source[source['tags'] == 'parties']
source1 = source.copy()
allvaluesp = source1.iloc[:, (cn + 1):]
allvaluesp = allvaluesp.dropna(axis=1, how='all')
# change % to values %
allvaluesperc = allvaluesp.apply(lambda x: x.str.rstrip('%').astype('float'), axis=0)

allvaluesperc = allvaluesperc.sort_values(by = [allvaluesperc.index[-1], allvaluesperc.index[-2]], axis = 1, ascending = False)

t = source1.loc[:, ['poll:identifier', 'pollster:id', 'middle_date']].join(allvaluesperc, how='right')

t = t.sort_values(['middle_date'], ascending=[False])

t.to_json(app_path + "ep2024/ep2024_polls_parties_table.json", orient='records')

names = pd.DataFrame([{'names': allvaluesperc.columns}])
names.to_json(app_path + "ep2024/ep2024_polls_parties_candidates.json", orient='records')

# coalitions
source1 = source[source['tags'] == 'coalitions']
allvaluesp = source1.iloc[:, (cn + 1):]
allvaluesp = allvaluesp.dropna(axis=1, how='all')
# change % to values %
allvaluesperc = allvaluesp.apply(lambda x: x.str.rstrip('%').astype('float'), axis=0)

allvaluesperc = allvaluesperc.sort_values(by = [allvaluesperc.index[-1], allvaluesperc.index[-2]], axis = 1, ascending = False)

t = source1.loc[:, ['poll:identifier', 'pollster:id', 'middle_date']].join(allvaluesperc, how='right')

t = t.sort_values(['middle_date'], ascending=[False])

t.to_json(app_path + "ep2024/ep2024_polls_coalitions_table.json", orient='records')

names = pd.DataFrame([{'names': allvaluesperc.columns}])
names.to_json(app_path + "ep2024/ep2024_polls_coalitions_candidates.json", orient='records')

# RACE CHART
origin = pd.read_csv(data_path + "origin_race_chart.csv")

mx = mu.index.max()
mx.month
mx.year

limits = pd.date_range(mu.index.min() - datetime.timedelta(days=28),mu.index.max() + datetime.timedelta(days=28), freq='MS').tolist()
midmonths = []
i = 0
for l in limits[0:-1]:
  midmonths.append((limits[i + 1] - l) / 2  + l)
  i += 1

rows = pd.DataFrame()
for mm in midmonths:
  greater = mu.index[mu.index > mm]
  smaller = mu.index[mu.index < mm]
  if len(greater) == 0:
    row = round(mu.iloc[-1, :] * 1000) / 10
  elif len(smaller) == 0:
    row = round(mu.iloc[0, :] * 1000) / 10
  else:
    d1 = mm - smaller[-1]
    d2 = greater[0] - mm
    row = round((d2 / (d1 + d2) * mu.loc[smaller[-1].isoformat()[0:10], :] + d1 / (d1 + d2) * mu.loc[greater[0].isoformat()[0:10], :]) * 1000) / 10
  rows = pd.concat([rows, pd.DataFrame(row).T])

rows.index = [datetime.datetime.strftime(mm, "%m/%y") for mm in midmonths]

origin.index = origin['strana']
origin.join(rows.T).to_csv(flourish_path + "ep2024_race_chart.csv", index=False, decimal=',')

