const plan = require('../sample-data/sample-rain-plan.json');
const program = require('../sample-data/sample-program.json')
const createPlan = require('./createPlan.js');

describe('create plan', ()=> {
    it('creates a plan based on the current time, program and config', ()=> {

      const config = {
        pauseBetweenZones: 1,
        program,
      }

      expect(createPlan({config})(1496671958663))
        .toEqual(plan)
    })
})
