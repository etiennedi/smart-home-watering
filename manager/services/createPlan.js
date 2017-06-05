const getStart = (accu, pause, now) => {
  if (accu.length === 0) { // first zone, we start immediately
      return now
  }
  return accu[accu.length-1].end + pause
}

const getEnd = (accu, duration, pause, now) => {
  return getStart(accu, pause, now) + duration
}


const createPlan = ({config}) => now => {
  const { program, pauseBetweenZones /* in minutes */ } = config;

  const pause = pauseBetweenZones * 60000 // convert to milliseconds

  return program.reduce( (accu, curr) => {
      const duration = curr.duration * 60000 // convert to milliseconds
      return [].concat(
        accu,
        {
          zone: curr.zone,
          start: getStart(accu, pause, now),
          end: getEnd(accu, duration, pause, now),
        }
      )
  }, [])
}

module.exports = createPlan;
