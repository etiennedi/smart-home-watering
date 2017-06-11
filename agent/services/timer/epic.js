const Rx = require('rxjs');
const duck = require('./duck');
const actions = duck.actions;
const actionCreators = duck.actionCreators

const timerEpic = action$ => action$
  .ofType(actions.INITIALIZE)
  .switchMap(
     () => Rx.Observable
       .interval(1000)
       .map(() => actionCreators.trigger())
  )

module.exports = timerEpic;
