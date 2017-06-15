const { initialize } = require("./cron");

const CronMock = jest.fn();

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
});
