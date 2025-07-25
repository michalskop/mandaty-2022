"""Testing psp again, always better."""

from calendar import month
import datetime
import json
import math
import pandas as pd
import plotly.graph_objects as go
import numpy as np
from scipy.spatial import distance
from scipy.stats import binom

# this part: sloup 2016 version only
import plotly.io as pio
pio.orca.config.executable = '/home/michal/.nvm/versions/node/v14.6.0/bin/orca'


source_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhp47e91OazMSiu56gOTsUtnFEIaJiIhJbsgNTylwt89XIEnbiVyObJ8xHEoZPObo6ntOmQ9Tg-sf9/pub?gid=0&single=true&output=csv"
choices_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhp47e91OazMSiu56gOTsUtnFEIaJiIhJbsgNTylwt89XIEnbiVyObJ8xHEoZPObo6ntOmQ9Tg-sf9/pub?gid=302501468&single=true&output=csv"

assets_path = "frontend/assets/"
public_path = "frontend/public/shares/"
app_path = "frontend/assets/data/"
flourish_path = "backend/data/"
data_path = "backend/data/"
abs_path = "/home/michal/dev/mandaty-2022/" # sloup 2016 version

source = pd.read_csv(source_url)
choices = pd.read_csv(choices_url)
coalitions_url = data_path + "coalitions.csv"
coalitions_selected = pd.read_csv(coalitions_url)

others = 'jiné strany'

# parameters:
include_limit = 0.03
include_current3_limit = 0.02
include_election_limit = 0.05

sample_n = 777  # basic sample size

runs = 1000  # number of runs

coef = 2 # coefficient * sd (other error)

election_date = '2025-10-03'
majority = 101

# special coalitions:
special_coalitions = {
  'SPOLU': ['ODS', 'KDU-ČSL', 'TOP 09'],
  'Piráti+Z': ['Piráti', 'Zelení'],
  # 'Přísaha+Motor': ['Přísaha', 'Motoristé'],
  # 'Stačilo': ['KSČM', 'SOCDEM'],  # Variant Stačilo!
}


def id2abbreviation(id):
  """ Abbreviation from id."""
  if len(choices[choices['id'] == id]) > 0:
    abbreviation = choices[choices['id'] == id].iloc[0]['abbreviation']
  else:
    abbreviation = id
  return abbreviation


# run everything twice:
# 1. with special coalitions -> used only for the basic overview on Mandáty.cz and SZ
# 2. with parties -> used for the rest of the calculations
# special = True needs to be run first, because many files will be overwritten in the second run
for special in [True, False]:

  # find Unnamed: x column
  cn = 0
  for i in range(len(source.columns)):
    if source.columns[i].find('Unnamed:') >= 0:
      cn = i      

  # filter only parties, not coalitions
  source1 = source[source['tags'] == 'parties']
  middle_dates = source1['middle_date']

  # parties, filter out coalitions
  allvaluesp = source1.iloc[:, (cn + 1):]
  allvaluesp = allvaluesp.dropna(axis=1, how='all')
  # selected_indeces = allvaluesp.index

  # change % to values
  allvalues = allvaluesp.apply(lambda x: x.str.rstrip('%').astype('float') / 100.0, axis=0)

  # replace parties with special coalitions
  if special:
    # for sc in special_coalitions:
    #   allvalues.loc[:, sc] = allvalues[special_coalitions[sc]].sum(axis=1)
    #   allvalues = allvalues.drop(special_coalitions[sc], axis=1)
    for sc in special_coalitions:
      # Calculate the sum of the individual parties
      coalition_sum = allvalues[special_coalitions[sc]].sum(axis=1)
      
      # Check if the coalition column exists
      if sc in allvalues.columns:
        # Fill NaN values in the coalition column with the sum of the individual parties
        allvalues[sc] = allvalues[sc].fillna(coalition_sum)
      else:
        # Create the coalition column with the sum of the individual parties
        allvalues[sc] = coalition_sum
    
      # Drop the individual parties columns
      allvalues = allvalues.drop(special_coalitions[sc], axis=1)

  # remove others
  allvalues = allvalues.drop(others, axis=1)
  
  # remove columns from special coalitions
  for sc in special_coalitions:
    for party in special_coalitions[sc]:
      if party in allvalues.columns:
          allvalues = allvalues.drop(party, axis=1)

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
      overs.loc[:, ('rest_rank')] = overs['rest'].rank() # pořadí zbytků §50 (4)

      # correction §50 (4)
      overseats = overs['nof_seats'].sum() - rs
      if overseats > 0:
        print(rc, overseats)
        ioverseats = overs.index[overs['rest_rank'] <= overseats]
        for i in ioverseats:
          overs['nof_seats'][i] -= 1
          overs['rest'][i] = overs['estimated_votes'][i] - overs['nof_seats'][i] * N


      # Exclude empty or all-NA columns before concatenation
      overs = overs.dropna(axis=1, how='all')
      # first run
      if regional_seats.empty:
        regional_seats = overs.loc[:, ['party', 'region_code', 'nof_seats', 'rest']]
      # Check if overs is not empty before concatenation
      elif not overs.empty:
        regional_seats = pd.concat([regional_seats, overs.loc[:, ['party', 'region_code', 'nof_seats', 'rest']]], ignore_index=True)

    # 2nd scrutinium
    ss = 200 - regional_seats['nof_seats'].sum()
    rests = regional_seats['rest'].sum()

    RN = rests / (ss + 1)

    extras = pd.pivot_table(regional_seats, values=['rest'], index='party', aggfunc='sum').reset_index()
    extras.loc[:, ('nof_seats')] = (extras['rest'] / RN).apply(math.floor)
    extras.loc[:, ('rest_rest')] = extras['rest'] - extras['nof_seats'] * RN
    extras.loc[:, ('rank')] = extras['rest_rest'].rank()
    last_rest = ss - extras['nof_seats'].sum()
    extras.loc[:, ('extra')] = extras['nof_seats'] + 1 * (extras['rank'] <= last_rest)

    nof_seats = pd.pivot_table(regional_seats, values=['nof_seats'], index='party', aggfunc='sum').reset_index()
    nof_seats = nof_seats.merge(extras, how='left', left_on='party', right_on='party')
    nof_seats.loc[:, ('seats')] = nof_seats['nof_seats_x'] + nof_seats['extra']

    nof_seats = region.loc[:, ['party']].merge(nof_seats, how='left', on='party')

    out = nof_seats.loc[:, ('party', 'seats')].set_index('party').transpose()

    return out

  # last regional results
  last_regional_results = pd.read_csv(abs_path + data_path + "psp2021_regional_results.csv")
  last_regional_results = last_regional_results.merge(choices.loc[:, ['id', 'needs']], left_on="party", right_on="id", how="left")
  regions_seats = pd.read_csv(abs_path + data_path + "psp2021_seats.csv")
  region_codes = regions_seats['region_code'].tolist()
  # total_last_votes = last_regional_results[~last_regional_results['party'].isin(['SPOLU', 'Piráti+STAN'])].sum()['votes']
  total_last_votes = 5375090  # 2021

  # estimates
  # last row
  tm = mun.loc[mun.index.max()]
  if isinstance(tm, pd.Series):
    m = tm
  else:
    m = tm.iloc[0, :]
  diagonal = np.diag(sigman.iloc[-1]) * coef
  cov = np.matmul(np.matmul(diagonal, corr), diagonal)
  samples = pd.DataFrame(np.random.multivariate_normal(m, cov, runs) / sample_n)
  samples.columns = selected_parties

  estimates = pd.DataFrame(columns=selected_parties)
  for i in range(runs):
    sample = samples.iloc[i].reset_index()
    sample.columns = ['party', 'value']
    if estimates.empty:
      estimates = imperiali(sample)
    else:
      estimates = pd.concat([estimates, imperiali(sample)], ignore_index=True)

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

  if special:
    stats.to_json(abs_path + assets_path + "data/psp/stats.json", force_ascii=False, orient='records', indent=2)

    with open(abs_path + assets_path + "data/psp/current_seats.json", "w") as fout:
        rich = {
            "data": stats[stats['hi'] > 0].to_dict(orient='records'),
            "date": d.max()['middle_date'].isoformat()[0:10]
        }
        json.dump(rich, fout, ensure_ascii=False)

  # Coalitions: coalitions have to include all the parties, coalitions_inc include also those with 0 seats
  if special:
    coalitions = pd.DataFrame(columns=['ids', 'majoririty_probability', 'seats'])
    coalitions_inc = pd.DataFrame(columns=['ids', 'majoririty_probability', 'seats'])

    def _coalition_probability(estimates, parties_ids, majority, runs):
      t = estimates[parties_ids].sum(axis=1)
      return (t >= majority).sum() / runs
    
    # single parties
    for party in estimates.columns:
      it = {
        'id': party,
        'majority_probability': _coalition_probability(estimates, [party], majority, len(estimates)),
        'seats': stats[stats['party'] == party]['seats'].iloc[0]
      }
      if coalitions.empty:
        coalitions = pd.DataFrame([it])
        coalitions_inc = pd.DataFrame([it])
      else:
        coalitions = pd.concat([coalitions, pd.DataFrame([it])])
        coalitions_inc = pd.concat([coalitions_inc, pd.DataFrame([it])])

    # two parties
    for i in range(len(estimates.columns)):
      for j in range(i + 1, len(estimates.columns)):
        # for id, give the bigger one first
        if stats[stats['party'] == estimates.columns[i]]['seats'].iloc[0] < stats[stats['party'] == estimates.columns[j]]['seats'].iloc[0]:
          idx = estimates.columns[j] + '*' + estimates.columns[i]
        else:
          idx = estimates.columns[i] + '*' + estimates.columns[j]
        # select only those with at least 1 seat for all parties
        estimates_1 = estimates[(estimates[estimates.columns[i]] > 0) & (estimates[estimates.columns[j]] > 0)]
        it = {
          'id': idx,
          'majority_probability': _coalition_probability(estimates_1, [estimates.columns[i], estimates.columns[j]], majority, len(estimates)),
          'seats': stats[stats['party'] == estimates.columns[i]]['seats'].iloc[0] + stats[stats['party'] == estimates.columns[j]]['seats'].iloc[0]
        }
        itc = it.copy()
        itc['majority_probability'] = _coalition_probability(estimates, [estimates.columns[i], estimates.columns[j]], majority, len(estimates))
        coalitions = pd.concat([coalitions, pd.DataFrame([it])])
        coalitions_inc = pd.concat([coalitions_inc, pd.DataFrame([itc])])

    # selected coalitions
    for i in range(len(coalitions_selected)):
      idx = coalitions_selected.iloc[i]['id']
      ids = coalitions_selected.iloc[i]['id'].split('*')
      # select only those with at least 1 seat for all parties in ids
      estimates_1 = estimates
      for id in ids:
        estimates_1 = estimates_1[estimates_1[id] > 0]
      it = {
        'id': idx,
        'majority_probability': _coalition_probability(estimates_1, ids, majority, len(estimates)),
        'seats': sum(stats[stats['party'] == party]['seats'].iloc[0] for party in ids)
      }
      itc = it.copy()
      itc['majority_probability'] = _coalition_probability(estimates, ids, majority, len(estimates))
      coalitions = pd.concat([coalitions, pd.DataFrame([it])])
      coalitions_inc = pd.concat([coalitions_inc, pd.DataFrame([itc])])
    
    coalitions = coalitions.sort_values(['majority_probability', 'seats'], ascending=False)
    coalitions_inc = coalitions_inc.sort_values(['majority_probability', 'seats'], ascending=False)

    # save
    coalitions.to_json(abs_path + assets_path + "data/psp/coalitions.json", force_ascii=False, orient='records')
    coalitions_inc.to_json(abs_path + assets_path + "data/psp/coalitions_inc.json", force_ascii=False, orient='records')

  #
  # prepare flourish + plotly charts
  # Handle duplicate indices by sorting by values at the maximum date
  max_date = mu.index.drop_duplicates(keep='last').max()
  # Get values at max_date and sort columns by those values
  max_values = mu.loc[max_date]
  if isinstance(max_values, pd.DataFrame):
      max_values = max_values.iloc[-1]
  mu = mu[max_values.sort_values(ascending=False).index]
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

  if special:
    with open(abs_path + assets_path + "data/psp/data.json", "w") as fout:
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
      name=id2abbreviation(name) + ": " + name_perc,
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
  if special:
    fig.write_image(abs_path + assets_path + "image/psp_polls_history.svg")

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
  if special:
    fig.write_image(abs_path + assets_path + "image/psp_polls_history_small.svg")

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
    title="Sněmovna volby 2025",
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
  if special:
    fig.write_image(abs_path + assets_path + "image/psp_thumbnail.svg")

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

  dt = datetime.datetime.now().isoformat()
  filename = abs_path + public_path + dt + "_psp.png"

  with open(abs_path + assets_path + "data/psp/psp_share_image.json", "w") as fout:
    ddt = {
      'filename': abs_path + "shares/" + dt + "_psp.png"
    }
    json.dump(ddt, fout)

  if special:
    fig.write_image(filename)


  # FLOURISH
  # 
  # First chart - current overview
  # https://public.flourish.studio/visualisation/10393920/
  # we want to use the special coalitions here
  if special:
    chartdata = pd.DataFrame(round(mu.iloc[-1] * 100).astype(int)).T
    # rename columns to abbreviations
    chartdata.columns = [id2abbreviation(col) for col in chartdata.columns]
    chartdata.insert(0, 'Region name', 'ČR')
    chartdata.reset_index(drop=True).to_csv(abs_path + flourish_path + "psp_polls_current_overview.csv", index=False)

  # Full chart
  # https://public.flourish.studio/visualisation/10768917/
  # averages
  pollsters = source1['pollster:id'].unique()

  mu = mu[~mu.index.duplicated(keep='last')]
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
  valss = vals[~vals.index.duplicated(keep='last')].unstack().reset_index()
  valss.columns = ['Strana', 'level_1', 'Hodnota']
  valss = valss.join(pd.DataFrame(valss['level_1'].values.tolist()))
  valss.columns = ['Strana', 'level_1', 'Hodnota', 'Agentura', 'Datum']
  valss['size'] = (valss['Agentura'] == 'volby+STEM') * 6 + 6
  valss['Průměr'] = pd.NA
  valss = valss.astype({'Datum': str})

  concats = [fulldata, valss.loc[:, fulldata.columns]]

  fchart = pd.concat(concats)
  if special:
    fchart.to_csv(abs_path + flourish_path + "psp_polls_fchart.csv", index=False)

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

  t.to_json(abs_path + app_path + "psp/psp_polls_parties_table.json", orient='records')

  names = pd.DataFrame([{'names': allvaluesperc.columns}])
  names.to_json(abs_path + app_path + "psp/psp_polls_parties_candidates.json", orient='records')

  # coalitions
  source1 = source[source['tags'] == 'coalitions']
  allvaluesp = source1.iloc[:, (cn + 1):]
  allvaluesp = allvaluesp.dropna(axis=1, how='all')
  # change % to values %
  allvaluesperc = allvaluesp.apply(lambda x: x.str.rstrip('%').astype('float'), axis=0)

  allvaluesperc = allvaluesperc.sort_values(by = [allvaluesperc.index[-1], allvaluesperc.index[-2]], axis = 1, ascending = False)

  t = source1.loc[:, ['poll:identifier', 'pollster:id', 'middle_date']].join(allvaluesperc, how='right')

  t = t.sort_values(['middle_date'], ascending=[False])

  t.to_json(abs_path + app_path + "psp/psp_polls_coalitions_table.json", orient='records')

  names = pd.DataFrame([{'names': allvaluesperc.columns}])
  names.to_json(abs_path + app_path + "psp/psp_polls_coalitions_candidates.json", orient='records')

  # RACE CHART
  if special:
    origin = pd.read_csv(abs_path + data_path + "origin_race_chart.csv")
  else:
    origin = pd.read_csv(abs_path + data_path + "origin_race_chart_parties.csv")

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
    if (not(isinstance(row, pd.Series))):
      row = row.iloc[0]
    rows = pd.concat([rows, pd.DataFrame(row).T])

  rows.index = [datetime.datetime.strftime(mm, "%m/%y") for mm in midmonths]

  origin.index = origin['strana']
  if special:
    origin.join(rows.T).to_csv(abs_path + flourish_path + "psp_race_chart.csv", index=False, decimal=',')
  else:
    origin.join(rows.T).to_csv(abs_path + flourish_path + "psp_race_chart_parties.csv", index=False, decimal=',')  
