/** @format */

const promptCreate = [
  {
    type: "input",
    name: "author",
    message: "请输入项目作者",
    default() {
      return "@edison";
    },
  },
  {
    type: "input",
    name: "description",
    message: "请输入项目描述",
    default() {
      return "a new project";
    },
  },

  {
    type: "confirm",
    name: "private",
    message: "项目是否为private？(y/N)",
    default() {
      return false;
    },
  },
  // {
  //   when: (answers) => answers.features.includes("typescript"),
  // },
];

const projectList = {
  type: "list",
  name: "repo",
  message: "项目模版列表",
  pageSize: 20,
  choices: [],
};
const tagList = {
  type: "list",
  name: "tag",
  message: "请选择项目tag",
  choices: [],
};
let downloadDir =
  process.env[process.platform === "darwin" ? "HOME" : "USERPROFILE"];
module.exports = {
  promptCreate,
  projectList,
  downloadDir,
  tagList,
};
