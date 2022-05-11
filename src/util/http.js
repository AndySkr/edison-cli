/** @format */

const axios = require("axios");
const util = require("util");
const d = require("download-git-repo");
const download = util.promisify(d);
async function httpReq(url) {
  return await axios.get(url);
}
function downloadTemplate(url, desc) {
  return download(url, desc);
}

module.exports = {
  httpReq,
  downloadTemplate,
};
