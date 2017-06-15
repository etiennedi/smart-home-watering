const initialize = ({ CronJob }) => schedule => {
  return schedule.map(({ cronTime, action }) => {
    return new CronJob({
      cronTime,
      onTick: action,
      start: true
    });
  });
};

module.exports = { initialize };
