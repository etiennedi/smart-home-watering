const shouldWaterNow = (now, start, end) => {
  return now >= start && now <= end
}

const getShouldWaterList = (now, plan) => {
  return plan.map( zone => ({
        zone:zone.zone,
        water: shouldWaterNow(now, zone.start, zone.end)
    }))
}

module.exports = getShouldWaterList;
