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
];
module.exports = {
  promptCreate,
};
