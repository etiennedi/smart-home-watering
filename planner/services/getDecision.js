const request = require('request-promise');

const getDecision = ({ config }) => {
  const decisionApi = config.endpoints['decision-api'];
  return request({
    uri: `${decisionApi}/watering-decision`,
    json:true,
  })
}

module.exports = getDecision
