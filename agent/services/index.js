const redux = require('redux');

const plans = require('./plans/duck').reducer;

const reducers = redux.combineReducers({
  plans
})

module.exports = {
  reducers,
}
