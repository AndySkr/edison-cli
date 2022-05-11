/** @format */

const ora = require("ora");
const chalk = require("chalk");
function spinnerWrap(fn, message) {
  const spinner = ora(chalk.yellow(message));
  spinner.spinner = "moon"; // mindblown  monkey runner pong fingerDance soccerHeader moon
  return async function (...args) {
    try {
      spinner.start();
      let res = await fn.apply(this, args);
      spinner.succeed();
      return res;
    } catch (error) {
      spinner.fail("fail");
      console.log(chalk.red(JSON.stringify(error)));
    } finally {
      spinner.stop();
    }
  };
}
module.exports = {
  spinnerWrap,
};
