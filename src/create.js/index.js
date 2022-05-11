/** @format */

const ejs = require("ejs");
const fs = require("fs");
const child_process = require("child_process");
const { httpReq, downloadTemplate } = require("../util/http");
const { spinnerWrap } = require("../util/spinnerWrap.js");
const { prompt } = require("../prompt");
const { promptCreate, projectList, tagList } = require("../constant/index");
let projectPath = "";
async function list() {
  prompt(await getProjectList());
}
async function create(projectName) {
  let answers = await prompt(promptCreate);
  answers = { ...answers, projectName };
  const { repo } = await prompt(await getProjectList());
  const projectTagsList = await getTagsByProject(repo);
  // 如果项目存在tag时
  if (projectTagsList?.length) {
    tagList.choices = projectTagsList;
    var { tag = "" } = await prompt(tagList);
  }
  await download(repo, tag, answers);
  spinnerWrap(() => resolveTemplateConfig(answers), "wating...")();
}
async function download(repo, tag, answers) {
  const { projectName = repo } = answers;
  projectPath = `${process.cwd()}/${projectName}`; // 更新下载的路径
  let downloadUrl = `AndySkr/${repo}`;
  if (tag) {
    downloadUrl = `AndySkr/${repo}#${tag}`;
  }
  try {
    await spinnerWrap(
      () => downloadTemplate(downloadUrl, projectPath),
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
function resolveTemplateConfig(config) {
  const filepath = `${projectPath}/package.json`;
  fs.readFile(filepath, (err, data) => {
    if (err) throw err;
    const pckfileStr = data.toString();
    const res = ejs.render(pckfileStr, config);
    fs.writeFileSync(filepath, res);
  });
}
module.exports = { list, create };
