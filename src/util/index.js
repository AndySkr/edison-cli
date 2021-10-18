/** @format */

// const ora = require("ora");
const chalk = require("chalk");
const spinnerWrap = (fn, message) => async (...args) => {
  // const spinner = ora(chalk.yellow(message));
  try {
    // spinner.start();
    let res = await fn(...args);
    // spinner.succeed("download successed");
    return res;
  } catch (error) {
    // spinner.fail("download fail");
    console.log(chalk.red(JSON.stringify(error)));
  }
}
module.exports = {
  spinnerWrap,
};
