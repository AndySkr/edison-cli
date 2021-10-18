/** @format */

const axios = require("axios");
const util = require("util");
const d = require("download");
const download = util.promisify(d);
function queryTemplate(url) {
  download(url);
}
function queryTemplateTag(url) {
  download(url);
}

modules.exports = {
  queryTemplate,
  queryTemplateTag,
};
