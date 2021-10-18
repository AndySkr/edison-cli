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
const commandConfig = {
  'createApp': {
    alias: 'cApp',
    argument: '<projectName>',
    desc: "create a new project",
    example: [
      'edison-cli createApp myProject '
    ]
  },
  'list': {
    alias: 'ls',
    argument: '',
    desc: "search current project list",
    example: [
      'edison-cli list'
    ]
  },
  '*': {
    alias: '',
    argument: '',
    desc: "command not found",
    example: []
  }
}
module.exports = {
  promptCreate,
  commandConfig
};
