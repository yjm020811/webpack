// 同步loader
module.exports = function (content) {
  console.log("loader03", content);
  // this绑定对象,解决异步问题
  // const callback = this.callback;

  // return content + "aaa";
  // callback进行调用:
  // 参数一:错误信息
  // 参数二:传递给下一个loader的数据
  // callback(null, "哈哈哈");
};

// 异步loader
module.exports = function (content) {
  const callback1 = this.async();
  setTimeout(() => {
    console.log("loader03", content);
    // 参数一:错误信息
    // 参数二:传递给下一个loader的数据
    callback1(null, "异步loader");
  }, 2000);
};
