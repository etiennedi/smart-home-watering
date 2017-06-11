const plan = require('../../sample-data/sample-rain-plan.json')
const getList = require('./shouldWater.js')

describe("getList", ()=> {

    it("responds with false for all zones when triggered outside of the timeframe", ()=> {
      expect(getList(1496670958663, plan)).toEqual([
         { zone: "back",  water: false },
         { zone: "side",  water: false },
      ])
    })

    it("responds with true for all zones currently in the timeframe", ()=> {
      expect(getList(1496671959663, plan)).toEqual([
         { zone: "back",  water: true },
         { zone: "side",  water: false },
      ])
    })
})
