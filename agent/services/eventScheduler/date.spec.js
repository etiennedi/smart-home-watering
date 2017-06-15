const todayAtTime = require('./date').todayAtTime;

describe('todayAtTimestring', ()=> {

  let result;
  let date;
  const currentTime = 1497543052669
  const currentDate = new Date(currentTime);

  beforeAll(() => {
      const timeString = "16:42:27"
      result = todayAtTime(currentTime, timeString);
      date = new Date(result);
  })

  it('keeps the day', ()=> {
    expect(date.getDate()).toEqual(currentDate.getDate())
  })

  it('keeps the month', ()=> {
    expect(date.getMonth()).toEqual(currentDate.getMonth())
  })

  it('keeps the year', ()=> {
    expect(date.getYear()).toEqual(currentDate.getYear())
  })

  it('sets the hour to the desired value', () => {
    expect(date.getHours()).toEqual(16)
  });

  it('sets the minute to the desired value', () => {
    expect(date.getMinutes()).toEqual(42)
  });

  it('sets the seconds to the desired value', () => {
    expect(date.getSeconds()).toEqual(27)
  });

  it('sets the milliseconds to 0', () => {
    expect(date.getMilliseconds()).toEqual(0)
  });

})
