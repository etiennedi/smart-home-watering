const manager = (now, plan) => {
  return plan.reduce( (accu, curr) => {
    return Object.assign(
      accu,
      {[curr.zone] : {water: false}}
    )
  }, {})
}

module.exports = manager;
