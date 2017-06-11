const nock = require('nock');
const getDecision = require('./getDecision');

describe("getDecision", () => {
  it('queries the decision API and resolves with the response', async () => {
    const config = {
      endpoints: {
        'decision-api' : "http://decision-api"
      }
    }
    nock(config.endpoints['decision-api'])
      .get('/watering-decision')
      .reply(200, {
          water: true
      })

      const result = await(getDecision({ config }))
      expect(result.water).toEqual(true)
  })
})
