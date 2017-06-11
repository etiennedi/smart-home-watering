const redux = require('redux');
const ro = require('redux-observable');

const plan = require('./plans/duck').reducer;
const logger = require('./logger/duck').reducer;
const controller = require('./controller/duck').reducer;

const reducers = redux.combineReducers({
  plan,
  logger,
  controller
})

const switchesEpics = require('./controller/epics/switches');
const timerEpics = require('./timer/epic');

const epics = ro.combineEpics(
  switchesEpics,
  timerEpics
)

module.exports = {
  reducers,
  epics
}
