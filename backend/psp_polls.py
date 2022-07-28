"""Testing psp again, always better."""

import datetime
import json
import math
import pandas as pd
import plotly.graph_objects as go
import numpy as np
from scipy.spatial import distance
from scipy.stats import binom

source_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhp47e91OazMSiu56gOTsUtnFEIaJiIhJbsgNTylwt89XIEnbiVyObJ8xHEoZPObo6ntOmQ9Tg-sf9/pub?gid=0&single=true&output=csv"
choices_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhp47e91OazMSiu56gOTsUtnFEIaJiIhJbsgNTylwt89XIEnbiVyObJ8xHEoZPObo6ntOmQ9Tg-sf9/pub?gid=302501468&single=true&output=csv"

assets_path = "frontend/assets/"
public_path = "frontend/public/shares/"
app_path = "frontend/assets/data/"
flourish_path = "backend/data/"
data_path = "backend/data/"

source = pd.read_csv(source_url)
choices = pd.read_csv(choices_url)

others = 'jiné strany'

include_limit = 0.03

sample_n = 777  # basic sample size

runs = 100

coef = 2 # coefficient * sd (other error)

election_date = '2025-10-01'

# find Unnamed: x column
cn = 0
for i in range(len(source.columns)):
  if source.columns[i].find('Unnamed:') >= 0:
    cn = i      

# filter only parties, not coalitions
source1 = source[source['tags'] == 'parties']

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
selected_parties = maxvalues[maxvalues > include_limit].index
selected_values = allvalues[selected_parties]

# correlations
corr = allvalues.loc[:, selected_parties].corr()

# mu, sigma
# dates distance matrix
d = source1.loc[:, ['middle_date']].apply(lambda x: pd.to_datetime(x))
dd = pd.DataFrame((d - d.min()).loc[:, 'middle_date'].dt.days)
distances = pd.DataFrame(distance.cdist(dd, dd), index=d.loc[:, 'middle_date'], columns=d.loc[:, 'middle_date'])
distances.drop_duplicates(inplace=True)
distances.T.drop_duplicates(inplace=True)
# weight matrix
# w = pow(distances, 1/30) * 30
w = 1 / np.exp(distances / 30)
ws = w.sum(axis=1)
# weighted values - mu
mu = np.matmul(w, selected_values).divide(np.asarray(ws), axis=0)
mu.columns = selected_parties
mun = mu * sample_n
# sigma
sigman = np.sqrt(mu * (1 - mu) * sample_n)


# Imperiali
def imperiali(sample):
  """ Imperiali. """
  # regional_sample = last_regional_results.merge(sample, how="left", left_on="party_code", right_on="party_code")
  # regional_sample['estimated_votes'] = regional_sample['votes'] * regional_sample['rate']

  regional_sample = last_regional_results.merge(sample, on="party")
  regional_sample.loc[:, 'estimated_votes'] = regional_sample['value'] * regional_sample['rate'] * total_last_votes

  regional_seats = pd.DataFrame(columns=['party_code', 'region_code', 'nof_seats', 'rest'])
  for rc in region_codes:
    # 1st scrutinium
    region = regional_sample[regional_sample['region_code'] == rc].reset_index()

    s = region.sum()['estimated_votes']
    rs = (regions_seats[regions_seats['region_code'] == rc]['seats']).iloc[0] # §48 (2)
    N = round(s / (rs + 2)) # krajske volebni cislo §50 (2)

    overs = region[region['value'] > region['needs']]
    overs = overs.assign(nof_seats=(overs.loc[:, ('estimated_votes')].divide(N)).apply(math.floor)) # počty mandátů §50 (3)
    overs.loc[:, ('rest')] = overs['estimated_votes'] - overs['nof_seats'] * N  # zbytky §50 (4)
    overs.loc[:, ('rest_rank')] = overs['rest'].rank()# pořadí zbytků §50 (4)

    # correction §50 (4)
    overseats = overs['nof_seats'].sum() - rs
    if overseats > 0:
      print(rc, overseats)
      ioverseats = overs.index[overs['rest_rank'] <= overseats]
      for i in ioverseats:
        overs['nof_seats'][i] -= 1
        overs['rest'][i] = overs['estimated_votes'][i] - overs['nof_seats'][i] * N


    regional_seats = regional_seats.append(overs.loc[:, ['party', 'region_code', 'nof_seats', 'rest']], ignore_index=True)

  # 2nd scrutinium
  ss = 200 - regional_seats['nof_seats'].sum()
  rests = regional_seats['rest'].sum()

  RN = rests / (ss + 1)

  extras = pd.pivot_table(regional_seats, values=['rest'], index='party', aggfunc=np.sum).reset_index()
  extras.loc[:, ('nof_seats')] = (extras['rest'] / RN).apply(math.floor)
  extras.loc[:, ('rest_rest')] = extras['rest'] - extras['nof_seats'] * RN
  extras.loc[:, ('rank')] = extras['rest_rest'].rank()
  last_rest = ss - extras['nof_seats'].sum()
  extras.loc[:, ('extra')] = extras['nof_seats'] + 1 * (extras['rank'] <= last_rest)

  nof_seats = pd.pivot_table(regional_seats, values=['nof_seats'], index='party', aggfunc=np.sum).reset_index()
  nof_seats = nof_seats.merge(extras, how='left', left_on='party', right_on='party')
  nof_seats.loc[:, ('seats')] = nof_seats['nof_seats_x'] + nof_seats['extra']

  nof_seats = region.loc[:, ['party']].merge(nof_seats, how='left', on='party')

  out = nof_seats.loc[:, ('party', 'seats')].set_index('party').transpose()

  return out

# last regional results
last_regional_results = pd.read_csv(data_path + "psp2021_regional_results.csv")
last_regional_results = last_regional_results.merge(choices.loc[:, ['id', 'needs']], left_on="party", right_on="id", how="left")
regions_seats = pd.read_csv(data_path + "psp2021_seats.csv")
region_codes = regions_seats['region_code'].tolist()
total_last_votes = last_regional_results[~last_regional_results['party'].isin(['SPOLU', 'Piráti+STAN'])].sum()['votes']
# total_last_votes = 5375090  # 2021

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
  estimates = estimates.append(imperiali(sample), ignore_index=True)

estimates = estimates.fillna(0)

# seats - best estimate
ms = m.reset_index().rename(columns={'index': 'party', mun.index.max(): 'value'})
ms.loc[:, 'value'] = ms['value'] / sample_n
seats = imperiali(ms).fillna(0)

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

stats.to_json(assets_path + "data/psp/stats.json", force_ascii=False, orient='records')

with open(assets_path + "data/psp/current_seats.json", "w") as fout:
    rich = {
        "data": stats[stats['hi'] > 0].to_dict(orient='records'),
        "date": d.max()['middle_date'].isoformat()[0:10]
    }
    json.dump(rich, fout, ensure_ascii=False)


#
# prepare flourish + plotly charts
mu.sort_values([mu.index.max()], ascending=False, axis=1, inplace=True)
# lo + hi: 
lo = binom.ppf(0.05, sample_n, mu) / sample_n
hi = binom.ppf(0.95, sample_n, mu) / sample_n
lo = coef * lo - mu  # lo + (lo - mu)
hi = coef * hi - mu  # hi + (hi - mu)

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
  fig.add_trace(go.Scatter(
    x=x,
    y=mu[name],
    mode='lines',
    line_shape='spline',
    name=name + ": " + str(round(mu[name][-1] * 100)) + '%',
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
fig.write_image(assets_path + "image/psp_polls_history.svg")

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
fig.write_image(assets_path + "image/psp_polls_history_small.svg")

# thumbnail
fig = go.Figure()
for name in mu.iloc[:, 0:5]:
  try:
    color = choices[choices['id'] == name].iloc[0]['color']
  except:
    color = '#BBBBBB'
  fig.add_trace(go.Scatter(
      x=x,
      y=mu[name],
      mode='lines',
      line_shape='spline',
      name=name + ": " + str(round(mu[name][-1] * 100)) + '%',
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
  title="Sněmovna 2021-2025",
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
fig.write_image(assets_path + "image/psp_thumbnail.svg")

# sharing picture
fig = go.Figure()
for name in mu.iloc[:, 0:5]:
  try:
    color = choices[choices['id'] == name].iloc[0]['color']
  except:
    color = '#BBBBBB'
  fig.add_trace(go.Scatter(
      x=x,
      y=mu[name],
      mode='lines',
      line_shape='spline',
      name=name + ": " + str(round(mu[name][-1] * 100)) + '%',
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
      text="Mandáty.cz: Sněmovna 2021-2025",
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
filename = public_path + d + "_psp.png"

with open(assets_path + "data/psp/psp_share_image.json", "w") as fout:
  dd = {
    'filename': "shares/" + d + "_psp.png"
  }
  json.dump(dd, fout)

# fig.write_image(path + "psp_test.png")


# FLOURISH
# 
# First chart - current overview
# https://public.flourish.studio/visualisation/10393920/
chartdata = pd.DataFrame(round(mu.iloc[-1] * 100).astype(int)).T
chartdata.insert(0, 'Region name', 'ČR')
chartdata.reset_index(drop=True).to_csv(flourish_path + "psp_polls_current_overview.csv", index=False)

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

# measured values
source1.loc[:, ['pollster:id', 'middle_date']]
vals = allvalues.copy()
vals.index = source1.loc[:, ['pollster:id', 'middle_date']]
valss = vals.unstack().reset_index()
valss.columns = ['Strana', 'level_1', 'Hodnota']
valss = valss.join(pd.DataFrame(valss['level_1'].values.tolist()))
valss.columns = ['Strana', 'level_1', 'Hodnota', 'Agentura', 'Datum']

# TABLES
# parties
source1 = source[source['tags'] == 'parties']
allvaluesp = source1.iloc[:, (cn + 1):]
allvaluesp = allvaluesp.dropna(axis=1, how='all')
# change % to values %
allvaluesperc = allvaluesp.apply(lambda x: x.str.rstrip('%').astype('float'), axis=0)

allvaluesperc = allvaluesperc.sort_values(by = [allvaluesperc.index[-1], allvaluesperc.index[-2]], axis = 1, ascending = False)

t = source1.loc[:, ['poll:identifier', 'pollster:id', 'middle_date']].join(allvaluesperc, how='right')

t = t.sort_values(['middle_date'], ascending=[False])

t.to_json(app_path + "psp/psp_polls_parties_table.json", orient='records')

names = pd.DataFrame([{'names': allvaluesperc.columns}])
names.to_json(app_path + "psp/psp_polls_parties_candidates.json", orient='records')

# coalitions
source1 = source[source['tags'] == 'coalitions']
allvaluesp = source1.iloc[:, (cn + 1):]
allvaluesp = allvaluesp.dropna(axis=1, how='all')
# change % to values %
allvaluesperc = allvaluesp.apply(lambda x: x.str.rstrip('%').astype('float'), axis=0)

allvaluesperc = allvaluesperc.sort_values(by = [allvaluesperc.index[-1], allvaluesperc.index[-2]], axis = 1, ascending = False)

t = source1.loc[:, ['poll:identifier', 'pollster:id', 'middle_date']].join(allvaluesperc, how='right')

t = t.sort_values(['middle_date'], ascending=[False])

t.to_json(app_path + "psp/psp_polls_coalitions_table.json", orient='records')

names = pd.DataFrame([{'names': allvaluesperc.columns}])
names.to_json(app_path + "psp/psp_polls_coalitions_candidates.json", orient='records')