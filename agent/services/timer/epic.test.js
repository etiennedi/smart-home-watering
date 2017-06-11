const epic = require('./epic');
const duck = require('./duck');
const testEpic = require('../../testEpic');

const rx = require('rxjs')
const ro = require('redux-observable')

describe('timer Epic', ()=> {
  it('foo', async ()=> {
      const result = await testEpic(epic, duck.actionCreators.initialize(), undefined, undefined, 3)
      expect(result).toHaveLength(3)
      expect(result[0].type).toEqual(duck.actions.TRIGGER)
  })
})
