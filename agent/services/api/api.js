const request = require('request-promise');

const api = config => ({
    getPlan: datetime => request({ uri: config.endpoints.planner + '/plan/' + datetime, json: true })
});

module.exports = api;
