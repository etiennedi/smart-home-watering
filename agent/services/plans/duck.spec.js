const duck = require('./duck');

describe('plans reducer', () => {
  it('initializes with an empty array', ()=> {
    expect(duck.reducer(undefined, {})).toEqual([])
  });
})

describe('plans received AC', ()=> {
  it('updates the state with the plan', () => {
    const samplePlan = [{ foo: 'bar' }];
    const action = duck.actionCreators.received(samplePlan);

    const state = duck.reducer(undefined, action);

    expect(state).toEqual(samplePlan)
  })
})
