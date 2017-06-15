const redux = require("redux");
const ro = require("redux-observable");

const plan = require("./plans/duck").reducer;
const logger = require("./logger/epic");
const controller = require("./controller/duck").reducer;
const eventSchedule = require("./eventScheduler/duck").reducer;
const api = require("./api/api");

const reducers = redux.combineReducers({
  plan,
  controller,
  eventSchedule
});

const switchesEpics = require("./controller/epics/switches");
const timerEpics = require("./timer/epic");
const planEpics = require("./plans/epic");

const epics = ro.combineEpics(switchesEpics, timerEpics, planEpics, logger);

module.exports = {
  reducers,
  epics,
  api
};
