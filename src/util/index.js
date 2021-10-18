/** @format */

// const ora = require("ora");
const chalk = require("chalk");
function spinnerWrap(fn, message) {
  // const spinner = ora(chalk.yellow(message));
  return async function (...args) {
    try {
      spinner.start();
      let res = await fn.apply(this, ...args);
      // spinner.succeed("download successed");
      return res;
    } catch (error) {
      // spinner.fail("download fail");
      console.log(chalk.red(JSON.stringify(error)));
    }
  };
}
module.exports = {
  spinnerWrap,
};
