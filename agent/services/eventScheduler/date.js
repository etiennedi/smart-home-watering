const todayAtTime = (current, timeString) => {
  const date = new Date(current);
  date.setHours(...timeString.split(":"));
  date.setMilliseconds(0);
  return date.getTime();
};

const timeToCron = timeString => {
  const [h, m, s] = timeString.split(":");
  return `${s} ${m} ${h} * * *`;
};

module.exports = {
  todayAtTime,
  timeToCron
};
