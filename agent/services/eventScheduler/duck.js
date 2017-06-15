const config = require("../../config.json");
const requestPlan = require("../plans/duck").actionCreators.requested;
const { todayAtTime, timeToCron } = require("./date");

const initialState = [
  {
    name: "GetTodaysConfigFromPlannerService",
    cronTime: timeToCron(config.timings.createPlan),
    action: () =>
      requestPlan(todayAtTime(Date.now(), config.timings.startWatering))
  }
];

const reducer = (state = initialState, action) => {
  return state;
};

module.exports = {
  reducer
};
