module.exports = function (content) {
  // 1.获取使用loader时传递进来的参数:this.getOptions()直接获取到参数
  const options = this.getOptions();
  console.log(options);

  return content;
};
