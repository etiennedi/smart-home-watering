const nock = require('nock');
const api = require('./api');

describe('getPlan', ()=> {
  it('gets the plan and extracts the json', async ()=> {
    const mockPlannerUri = 'http://mock-planner'
    const mockTime = 123456789
    const payload = { foo: 'bar' }
    config = { endpoints : { planner: mockPlannerUri}};
    nock(mockPlannerUri)
      .get('/plan/' + mockTime)
      .reply(200, payload)

    const result = await api(config).getPlan(mockTime);

    expect(result).toEqual(payload)
  })
})
