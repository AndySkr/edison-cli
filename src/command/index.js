/** @format */

const { program } = require("commander");
const { prompt } = require("../prompt");
const { list, create } = require("../create.js");
program
  .version(require("../../package.json").version, "-v, --version")
  .usage("<command> [options] 快速启动项目")
  .command("list")
  .description("search current project list")
  .action((source, destination) => {
    list();
  });
program
  .command("create <name>")
  .addArgument("<projectName>")
  .description("create a new project")
  .action((projectName, destination) => {
    create();
  });

program.parse();
// process.argv
