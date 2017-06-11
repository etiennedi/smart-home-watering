const getPlan = require('./getPlan')
const samplePlan = require('../sample-data/sample-rain-plan.json');

describe('getPlan', () => {
  it('creates a plan and it return is it if the decision is true', async ()=> {
    const getDecision = () => Promise.resolve({ water: true })
    const createPlan = () => () => samplePlan;
    const services = { getDecision, createPlan }
    const desiredTime = 213456
    const config = {}

    const result = await getPlan({config, services})(desiredTime)
    expect(result).toEqual(samplePlan)
  })
  it('returns an empty plan when the decision is false', async ()=> {
    const getDecision = () => Promise.resolve({ water: false })
    const services = { getDecision }
    const desiredTime = 213456
    const config = {}

    const result = await getPlan({config, services})(desiredTime)
    expect(result).toEqual([])
  })
})
