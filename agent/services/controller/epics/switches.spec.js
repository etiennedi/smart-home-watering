const plan = require('../../../sample-data/sample-rain-plan.json');
const toggle = require('../duck').actionCreators.toggle;
const timerActions = require('../../timer/duck').actions;
const testEpic = require('../../../testEpic');
const epic = require('./switches')

describe('switches', ()=> {

  it(`
      listens to timer.TRIGGER,
      and emits a TURN_ON action for each sprinkler that was off before
      finally, it emits a timer.TRIGGER_COMPLETED action
     `, async ()=> {
      const action = {
        type: timerActions.TRIGGER,
        time: 1496671958663 // "back" should be turned on now
      }
      const initialState = {
        plan,
        controller: {
          back: false       // "back" is currently turned off
        }
      }

      const result = await testEpic(epic, action, initialState);

      expect(result).toEqual([toggle('back', true), {type: timerActions.TRIGGER_COMPLETED }])
  })
  it(`
      listens to timer.TRIGGER,
      and emits a TURN_OFF action for each sprinkler that was on before
      finally, it emits a timer.TRIGGER_COMPLETED action
     `, async ()=> {
      const action = {
        type: timerActions.TRIGGER,
        time: 1496672019663 // "back" should be turned on off
      }
      const initialState = {
        plan,
        controller: {
          back: true       // "back" is currently turned on
        }
      }

      const result = await testEpic(epic, action, initialState);

      expect(result).toEqual([toggle('back', false), {type: timerActions.TRIGGER_COMPLETED }])
  })

  it(`
      listens to timer.TRIGGER,
      and only emites timer.TRIGGER_COMPLETED when no side effect is desired
     `, async ()=> {
      const action = {
        type: timerActions.TRIGGER,
        time: 1496671958663 // "back" should be turned on now
      }
      const initialState = {
        plan,
        controller: {
          back: true       // "back" is currently turned off
        }
      }

      const result = await testEpic(epic, action, initialState);

      expect(result).toEqual([{type: timerActions.TRIGGER_COMPLETED }])
  })
  it(`
      listens to timer.TRIGGER,
      and only emites timer.TRIGGER_COMPLETED when the plan is empty
     `, async ()=> {
      const action = {
        type: timerActions.TRIGGER,
        time: 1496671958663 // "back" should be turned on now
      }
      const initialState = {
        plan: [],
        controller: {
          back: true       // "back" is currently turned off
        }
      }

      const result = await testEpic(epic, action, initialState);

      expect(result).toEqual([{type: timerActions.TRIGGER_COMPLETED }])
  })
})
