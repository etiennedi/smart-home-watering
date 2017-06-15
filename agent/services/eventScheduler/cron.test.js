const { initialize } = require("./cron");

const CronMock = jest.fn(value => value);

describe("cron initialize", () => {
  it("starts a cronjob for each schedule", () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const schedule = [
      {
        cronTime: "* * * * * *",
        action: fn1
      },
      {
        cronTime: "* * * * * *",
        action: fn2
      }
    ];

    initialize({ CronJob: CronMock })(schedule);

    expect(CronMock).toHaveBeenCalledTimes(2);
  });

  it("wraps the action in a dispatch", () => {
    const fn1 = jest.fn();
    const dispatch = jest.fn();
    const schedule = [
      {
        cronTime: "* * * * * *",
        action: fn1
      }
    ];

    result = initialize({ CronJob: CronMock, dispatch })(schedule);
    result[0].onTick();

    expect(fn1).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
  });
});
