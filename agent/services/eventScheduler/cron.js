const initialize = ({ CronJob, dispatch }) => schedule => {
  return schedule.map(({ cronTime, action }) => {
    return new CronJob({
      cronTime,
      onTick: () => {
        console.log("in ontick");
        dispatch(action());
      },
      start: true
    });
  });
};

module.exports = { initialize };
