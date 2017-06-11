const Rx = require('rxjs');
const timerActions = require('../../timer/duck').actions;
const getShouldWaterList = require('../shouldWater')
const toggle = require('../duck').actionCreators.toggle;

const switchEpic = (action$, store) => {
  return action$.ofType(timerActions.TRIGGER)
    .switchMap(
      action => Rx.Observable.from(getShouldWaterList(action.time, store.getState().plan ))
                  .map(({ zone, water }) => shouldToggle(zone, water, store.getState().controller[zone]))
                  .filter( action => !!action)
                  .catch(err => console.error('error', err))
    .concat(Rx.Observable.of({type: timerActions.TRIGGER_COMPLETED}))
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

  // is off, should be turned on
  if(should === false && actual === true) {
    return toggle(zone, false)
  }

}
