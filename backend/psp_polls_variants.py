"""Manual variants of coalitions."""

# inside psp_polls.py 
# after # Coalitions: coalitions have to include all the parties, coalitions_inc include also those with 0 seats
# run only the part with special = True !!!

import pandas as pd

# variants:
# Motoristé = 0
# KSČM = 0
estimates_var = estimates.copy()
estimates_var = estimates_var[estimates_var['Motoristé'] == 0]
estimates_runs = len(estimates_var)

# test:
# estimates_var = estimates_var[estimates_var['ANO'] + estimates_var['SPD'] + estimates_var['Motoristé'] + estimates_var['KSČM'] <= 100]
# estimates_var = estimates_var[estimates_var['SPOLU'] + estimates_var['STAN'] + estimates_var['Piráti+Z'] <= 100]

coalitions = pd.DataFrame(columns=['ids', 'majoririty_probability', 'seats'])
coalitions_inc = pd.DataFrame(columns=['ids', 'majoririty_probability', 'seats'])

def _coalition_probability(estimates_var, parties_ids, majority, estimates_runs):
  t = estimates_var[parties_ids].sum(axis=1)
  return (t >= majority).sum() / estimates_runs

# single parties
for party in estimates_var.columns:
  it = {
    'id': party,
    'majority_probability': _coalition_probability(estimates_var, [party], majority, len(estimates_var)),
    'seats': stats[stats['party'] == party]['seats'].iloc[0]
  }
  if coalitions.empty:
    coalitions = pd.DataFrame([it])
    coalitions_inc = pd.DataFrame([it])
  else:
    coalitions = pd.concat([coalitions, pd.DataFrame([it])])
    coalitions_inc = pd.concat([coalitions_inc, pd.DataFrame([it])])

# two parties
for i in range(len(estimates_var.columns)):
  for j in range(i + 1, len(estimates_var.columns)):
    # for id, give the bigger one first
    if stats[stats['party'] == estimates_var.columns[i]]['seats'].iloc[0] < stats[stats['party'] == estimates_var.columns[j]]['seats'].iloc[0]:
      idx = estimates_var.columns[j] + '*' + estimates_var.columns[i]
    else:
      idx = estimates_var.columns[i] + '*' + estimates_var.columns[j]
    # select only those with at least 1 seat for all parties
    estimates_1 = estimates_var[(estimates_var[estimates_var.columns[i]] > 0) & (estimates_var[estimates_var.columns[j]] > 0)]
    it = {
      'id': idx,
      'majority_probability': _coalition_probability(estimates_1, [estimates_var.columns[i], estimates_var.columns[j]], majority, len(estimates)),
      'seats': stats[stats['party'] == estimates_var.columns[i]]['seats'].iloc[0] + stats[stats['party'] == estimates_var.columns[j]]['seats'].iloc[0]
    }
    itc = it.copy()
    itc['majority_probability'] = _coalition_probability(estimates_var, [estimates_var.columns[i], estimates_var.columns[j]], majority, len(estimates_var))
    coalitions = pd.concat([coalitions, pd.DataFrame([it])])
    coalitions_inc = pd.concat([coalitions_inc, pd.DataFrame([itc])])

# selected coalitions
for i in range(len(coalitions_selected)):
  idx = coalitions_selected.iloc[i]['id']
  ids = coalitions_selected.iloc[i]['id'].split('*')
  # select only those with at least 1 seat for all parties in ids
  estimates_1 = estimates_var
  for id in ids:
    estimates_1 = estimates_1[estimates_1[id] > 0]
  it = {
    'id': idx,
    'majority_probability': _coalition_probability(estimates_1, ids, majority, len(estimates_var)),
    'seats': sum(stats[stats['party'] == party]['seats'].iloc[0] for party in ids)
  }
  itc = it.copy()
  itc['majority_probability'] = _coalition_probability(estimates_var, ids, majority, len(estimates_var))
  coalitions = pd.concat([coalitions, pd.DataFrame([it])])
  coalitions_inc = pd.concat([coalitions_inc, pd.DataFrame([itc])])

coalitions = coalitions.sort_values(['majority_probability', 'seats'], ascending=False)
coalitions_inc = coalitions_inc.sort_values(['majority_probability', 'seats'], ascending=False)

print(coalitions_inc)
print(estimates_runs)