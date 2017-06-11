const express = require('express');
const plans = require('./plans')
const supertest = require('supertest')


describe('plans', () => {

  it('returns the plan on success', () => {
    const app = express();
    const config = {}
    const getPlan = () => startTime => Promise.resolve(['somePlan, starting: ' + startTime])
    const services = { getPlan }
    app.use('/', plans({config, services}))
    return supertest(app)
      .get('/plan/1234345676')
      .expect(200, ['somePlan, starting: 1234345676'])
  });

  it('returns 500 and the error if something fails', () => {
    const app = express();
    const config = {}
    const getPlan = () => startTime => Promise.reject(new Error('some error'))
    const services = { getPlan }
    app.use('/', plans({config, services}))
    return supertest(app)
      .get('/plan/1234345676')
      .expect(500, 'Error: some error')
  })
})
