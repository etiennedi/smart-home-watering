const config = require('../../config.json');
const requestPlan = require('../plans/duck').actionCreators.requested
const { todayAtTime } = require('./date');

const initialState = [
    {
      name: "GetTodaysConfigFromPlannerService",
      time: config.timings.createPlan,
      action: () => requested(todayAtTime( Date.now(), config.timings.startWatering))
    }
]

const reducer = (state = initialState, action) => {
  return state;
}

module.exports = {
  reducer,
}
