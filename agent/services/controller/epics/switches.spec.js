const plan = require('../../../sample-data/sample-rain-plan.json');
const toggle = require('../duck').actionCreators.toggle;
const TRIGGER = require('../../timer/duck').actions.TRIGGER;
const testEpic = require('../../../testEpic');
const epic = require('./switches')

describe('switches', ()=> {
  it(
    `listens to timer.TRIGGER,
     and emits a TURN_ON action for each sprinkler that was off before`, async ()=> {

      const action = {
        type: TRIGGER,
        time: 1496671958663 // "back" should be turned on now
      }

      const initialState = {
        plan,
        controller: {
          back: false       // "back" is currently turned off
        }
      }

      const result = await testEpic(epic, action, initialState);

      expect(result).toEqual([toggle('back', true)])
  })
})
