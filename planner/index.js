const express = require('express');

const apis = {
  plans: require('./api/plans')
}

const services = {
  getPlan: require('./services/getPlan'),
  createPlan: require('./services/createPlan'),
  getDecision: () => Promise.resolve({ water: true }),
}

const config = require('./config.json')

const dependencies = { config, services }
const app = express();

app.use('/', apis.plans(dependencies))
app.listen(8000, function () {
  console.log('Planner service listening on port 8000');
});
