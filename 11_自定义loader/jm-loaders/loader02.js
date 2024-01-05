module.exports = function (content) {
  console.log("loader02", content);
  return content + "bbb";
};
