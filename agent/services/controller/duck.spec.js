const duck = require('./duck');

describe('plans reducer', () => {
  it('initializes with an empty object', ()=> {
    expect(duck.reducer(undefined, {})).toEqual({})
  });
})

describe('updateStatus', ()=> {
  it('updates the state with the plan', () => {
    const action = duck.actionCreators.update('zone1', true);

    const state = duck.reducer(undefined, action);

    expect(state).toEqual({zone1: true})
  })
})
