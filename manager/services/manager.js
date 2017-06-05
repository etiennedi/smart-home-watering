const shouldWaterNow = (now, start, end) => {
  return now >= start && now <= end
}

const manager = (now, plan) => {
  return plan.reduce( (accu, curr) => {
    return Object.assign(
      accu,
      {[curr.zone] : {water: shouldWaterNow(now, curr.start, curr.end)}}
    )
  }, {})
}

module.exports = manager;
