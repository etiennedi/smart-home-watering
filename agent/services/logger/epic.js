const { TRIGGER, TRIGGER_COMPLETED } = require("../timer/duck").actions;
const ignoreList = ["LOGGING", TRIGGER, TRIGGER_COMPLETED];

module.exports = action$ => {
  return action$
    .filter(action => ignoreList.indexOf(action.type) == -1)
    .do(action =>
      process.stdout.write(
        `${new Date().toISOString()}: ${JSON.stringify(action)}\n`
      )
    )
    .mapTo({ type: "LOGGING" });
};
