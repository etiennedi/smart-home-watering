const todayAtTime = (current, timeString) => {
  const date = new Date(current);
  date.setHours(...timeString.split(':'))
  date.setMilliseconds(0)
  return date.getTime();
}

module.exports = {
  todayAtTime,
}
