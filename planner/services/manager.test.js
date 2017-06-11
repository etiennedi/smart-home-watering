const plan = require('../sample-data/sample-rain-plan.json')
const manager = require('./manager.js')

describe("manager", ()=> {

    it("responds with false for all zones when triggered outside of the timeframe", ()=> {
      expect(manager(1496670958663, plan)).toEqual({
         "side": { water: false },
         "back": { water: false },
      })
    })

    it("responds with true for all zones currently in the timeframe", ()=> {
      expect(manager(1496671959663, plan)).toEqual({
         "side": { water: false },
         "back": { water: true },
      })
    })
})
