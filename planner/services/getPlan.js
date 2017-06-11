const getPlan = ({config, services}) => startTime => {
  return services.getDecision({config}).then(res=> {
      if(res.water) {
        return services.createPlan({config})(startTime)
      } else{
        return []
      }
  })
}

module.exports = getPlan
