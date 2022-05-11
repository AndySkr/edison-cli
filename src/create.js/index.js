/** @format */

const { promptCreate, projectList, downloadDir } = require("../constant/index");
const child_process = require("child_process");
const { httpReq, downloadTemplate } = require("../util/http");
const { spinnerWrap } = require("../util/spinnerWrap.js");
const { prompt } = require("../prompt");
async function list() {
  prompt(await getProjectList());
}
async function create() {
  const tagList = {
    type: "list",
    name: "tag",
    message: "请选择项目tag",
    choices: [],
  };
  const answers = await prompt(promptCreate);
  const { repo } = await prompt(await getProjectList());
  const projectTagsList = await getTagsByProject(repo);
  // 如果项目存在tag时
  if (projectTagsList?.length) {
    tagList.choices = projectTagsList;
    var { tag = "" } = await prompt(tagList);
  }
  download(repo, tag);
}
async function download(repo, tag) {
  let downloadUrl = `AndySkr/${repo}`;
  if (tag) {
    downloadUrl = `AndySkr/${repo}#${tag}`;
  }
  try {
    await spinnerWrap(
      () => downloadTemplate(downloadUrl, `${process.cwd()}/${repo}`),
      "downloading..."
    )(); //path.resolve(__dirname, '..')
  } catch (error) {
    console.log(error);
  }
}
async function getProjectList() {
  const url = "https://api.github.com/users/AndySkr/repos";
  try {
    let res = (await spinnerWrap(httpReq, "loading...")(url)) || [];
    projectList.choices = res?.data?.map((item) => item.name);
    return projectList;
  } catch (error) {
    console.log(error);
  }
}
async function getTagsByProject(projectName) {
  let url = `https://api.github.com/repos/AndySkr/${projectName}/tags`;
  let res = (await spinnerWrap(httpReq, "loading...")(url)) || [];
  return res?.data?.map((item) => item.name);
}

module.exports = { list, create };
