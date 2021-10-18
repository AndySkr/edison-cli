/** @format */

const { program } = require("commander");
const { prompt } = require("../prompt");
const { spinnerWrap } = require("../util/index.js");
const { promptCreate, commandConfig } = require("../constant/index");
// https://api.github.com/repos/AndySkr/quick-ts-interface-until/tags
program
  .version(require("../../package.json").version, "-v, --version")
  .usage("<command> [options] 快速启动项目")

Reflect.ownKeys(commandConfig).forEach(action => {
  program
    .command(action)
    .alias(commandConfig[action].alias)
    .addArgument(commandConfig[action].argument)
    .description(commandConfig[action].desc)
    .action((projectName, destination) => {
      console.log(action)
      console.log(projectName);
      prompt(promptCreate);
    });
})

program.parse(process.argv);
