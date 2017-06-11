const express = require('express')

const plansRoutes = ({config, services}) => {
  const routes = express.Router();

  routes.get('/plan/:startTime', (req, res) => {
    services.getPlan({config, services})(req.params.startTime)
      .then(plan => {
        return res
          .status(200)
          .json(plan);
      })
      .catch(err => {
        return res
          .status(500)
          .send(err.toString())
      })
  });

  return routes;
}

module.exports = plansRoutes;
