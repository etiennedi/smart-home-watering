const redux = require('redux');
const reducers = require('./services').reducers
let store = redux.createStore(reducers)

store.subscribe(() => console.log('something', store.getState()))

// simulating a plan received
const planReceived = require('./services/plans/duck').actionCreators.received;
store.dispatch(planReceived(['samplePlan']))
