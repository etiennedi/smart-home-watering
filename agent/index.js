const redux = require("redux");
const ro = require("redux-observable");
const { CronJob } = require("cron");
const {
  initialize: initializeCronjobs
} = require("./services/eventScheduler/cron");

const config = require("./config.json");
const services = require("./services");
const reducers = services.reducers;
const epics = services.epics;
const api = services.api;

const dependencies = {
  api: api(config),
  config
};

const epicMiddleware = ro.createEpicMiddleware(epics, { dependencies });
let store = redux.createStore(reducers, redux.applyMiddleware(epicMiddleware));

var clear = require("clear");
store.subscribe(() => {});

const crons = initializeCronjobs({ CronJob, dispatch: store.dispatch })(
  store.getState().eventSchedule
);

const update = require("./services/controller/duck").actionCreators.update;
const initialize = require("./services/timer/duck").actionCreators.initialize;
store.dispatch(update("front", false));
store.dispatch(update("back", false));
store.dispatch(initialize());
