const redux = require("redux");
const ro = require("redux-observable");

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
store.subscribe(
  () => {}
  // () => {  clear(); console.log(store.getState())}
);

const planRequested = require("./services/plans/duck").actionCreators.requested;
const update = require("./services/controller/duck").actionCreators.update;
const initialize = require("./services/timer/duck").actionCreators.initialize;
store.dispatch(planRequested(Date.now() + 30 * 1000));
store.dispatch(update("front", false));
store.dispatch(update("back", false));
store.dispatch(initialize());
