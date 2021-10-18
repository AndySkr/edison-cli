/** @format */

const inquirer = require("inquirer");
const chalk = require("chalk");
function prompt(promptConfig) {
  inquirer
    .prompt(promptConfig)
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(chalk.red(error));
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
module.exports = {
  prompt,
};
