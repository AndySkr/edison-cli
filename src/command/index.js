/** @format */

const { program } = require("commander");
const { prompt } = require("../prompt");
const { spinnerWrap } = require("../util/index.js");
const { promptCreate } = require("../constant/index");
program
  .version(require("../../package.json").version, "-v, --version")
  .usage("<command> [options] 快速启动项目")
  .command("list")
  .description("search current project list")
  .action((source, destination) => {
    console.log(source, "clone command called");
  });
program
  .command("createApp")
  .addArgument("<projectName>")
  .description("create a new project")
  .action((projectName, destination) => {
    console.log(projectName);
    prompt(promptCreate);
  });

program.parse(process.argv);
