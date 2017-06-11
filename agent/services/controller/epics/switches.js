const Rx = require('rxjs');
const TRIGGER = require('../../timer/duck').actions.TRIGGER;
const getShouldWaterList = require('../shouldWater')
const toggle = require('../duck').actionCreators.toggle;

const switchEpic = (action$, store) => {
  const state = store.getState();
  return action$.ofType(TRIGGER)
    .switchMap(
      action => Rx.Observable.from(getShouldWaterList(action.time, state.plan ))
                  .map(({ zone, water }) => shouldToggle(zone, water, state.controller[zone]))
                  .filter( action => !!action)
    )
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

}
