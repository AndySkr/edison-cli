/** @format */

const promptCreate = [
  {
    type: "input",
    name: "author",
    message: "请输入项目创建人",
    default() {
      return "@edison";
    },
  },
  {
    type: "input",
    name: "desc",
    message: "请输入项目描述",
    default() {
      return "a new project";
    },
  },
  {
    when: (answers) => answers.features.includes("typescript"),
  },
];

const projectList = {
  type: "list",
  name: "repo",
  message: "项目模版列表",
  pageSize: 20,
  choices: [],
};
let downloadDir =
  process.env[process.platform === "darwin" ? "HOME" : "USERPROFILE"];
module.exports = {
  promptCreate,
  projectList,
  downloadDir,
};
