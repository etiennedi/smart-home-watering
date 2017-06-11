const redux = require('redux');
const ro = require('redux-observable')

const services = require('./services');
const reducers = services.reducers;
const epics = services.epics;

const epicMiddleware = ro.createEpicMiddleware(epics);
let store = redux.createStore(
  reducers,
  redux.applyMiddleware(epicMiddleware)
);


var clear = require('clear');
store.subscribe(
  () => {  clear(); console.log(store.getState().logger)}
)

// simulating a plan received
const planReceived = require('./services/plans/duck').actionCreators.received;
const update = require('./services/controller/duck').actionCreators.update;
const initialize = require('./services/timer/duck').actionCreators.initialize;
store.dispatch(planReceived([{zone: 'front', start: Date.now() + 15 * 1000, end: Date.now() + 45 * 1000}]))
store.dispatch(update('front', false))
store.dispatch(update('back', false))
store.dispatch(initialize())
