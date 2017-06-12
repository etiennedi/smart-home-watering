const Rx = require('rxjs');
const duck = require('./duck')
const { received, requested, error } = duck.actionCreators;
const { REQUESTED } = duck.actions

const fetchPlan = (action$, _, { api }) => {
  return action$.ofType(REQUESTED)
    .switchMap(api.getPlan)
    .map(results => received(results))
    .catch(err => Rx.Observable.of(error(err)));
}

module.exports = fetchPlan;
