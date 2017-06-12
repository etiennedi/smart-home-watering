const testEpic = require('./../../testEpic.js');
const epic = require('./epic');

const { received, requested, error } = require('./duck').actionCreators;

describe('plan epic', () => {
  it('dispatches a received action with the plan', async () => {
    const api = {
      getPlan: () => Promise.resolve('plan'),
    };

    const result = await testEpic(epic, requested(), {}, { api });
    expect(result).toEqual([received('plan')]);
  });

  it('dispatches an error action', async () => {
    const epicError = new Error('Error');

    const api = {
      getPlan: () => Promise.reject(epicError),
    };

    const result = await testEpic(epic, requested(), {}, { api });
    expect(result).toEqual([error(epicError)]);
  });
});
