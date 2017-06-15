const reducer = require('./duck').reducer;

describe('reducer', ()=> {
  it('returns the initialState', ()=> {
    expect(reducer(undefined,{})[0].name).toEqual("GetTodaysConfigFromPlannerService")
  })
})
