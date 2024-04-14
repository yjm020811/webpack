// 同步loader
module.exports = function (content) {
  console.log("loader03", content);
  // return content + "aaa";

  // this绑定对象,解决异步问题
  const callback = this.callback;
  // callback进行调用:
  // 参数一:错误信息
  // 参数二:传递给下一个loader的数据
  callback(null, "同步loader");
};


// 异步loader
module.exports = function (content) {
  const callback = this.async();
  console.log('异步loader，加载中...');
  setTimeout(() => {
    console.log("loader03", content);
    // 参数一:错误信息
    // 参数二:传递给下一个loader的数据
    callback(null, "异步loader");
  }, 3000);
};
