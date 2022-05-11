/** @format */

const ora = require("ora");
const chalk = require("chalk");
function spinnerWrap(fn, message) {
  const spinner = ora(chalk.yellow(message));
  spinner.spinner = "pong"; // mindblown  monkey runner pong fingerDance soccerHeader
  return async function (...args) {
    try {
      spinner.start();
      let res = await fn.apply(this, args);
      spinner.succeed("successed");
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
