const Rx = require('rxjs');
const duck = require('./duck');
const actions = duck.actions;
const actionCreators = duck.actionCreators

const timerEpic = (action$, _, { config }) => action$
  .ofType(actions.INITIALIZE)
  .switchMap(
     () => Rx.Observable
       .interval(config.internals.refresh)
       .map(() => actionCreators.trigger())
  )

module.exports = timerEpic;
