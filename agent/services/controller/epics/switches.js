const Rx = require('rxjs');
const timerActions = require('../../timer/duck').actions;
const getShouldWaterList = require('../shouldWater')
const toggle = require('../duck').actionCreators.toggle;

const switchEpic = (action$, store) => {
  const state = store.getState();
  return action$.ofType(timerActions.TRIGGER)
    .switchMap(
      action => Rx.Observable.from(getShouldWaterList(action.time, state.plan ))
                  .map(({ zone, water }) => shouldToggle(zone, water, state.controller[zone]))
                  .filter( action => !!action)
    ).concat(Rx.Observable.of({type: timerActions.TRIGGER_COMPLETED}))
}

module.exports = switchEpic;

const shouldToggle = (zone, should, actual) => {
  if(should === actual) {
    return undefined;
  }

  // is off, should be turned on
  if(should === true && actual === false) {
    return toggle(zone, true)
  }

  // is off, should be turned on
  if(should === false && actual === true) {
    return toggle(zone, false)
  }

}
