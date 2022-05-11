/** @format */

const inquirer = require("inquirer");
const chalk = require("chalk");
async function prompt(promptConfig) {
  let answers = null;
  try {
    answers = await inquirer.prompt(promptConfig);
  } catch (error) {
    if (error.isTtyError) {
      console.log(chalk.red(error));
      // Prompt couldn't be rendered in the current environment
    }
  }
  return answers;
}
module.exports = {
  prompt,
};
