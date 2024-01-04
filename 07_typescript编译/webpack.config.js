const path = require("path");
module.exports = {
  mode: "development",
  // 配置的入口
  entry: "./src/index.ts",
  // 配置的出口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    clean: true
  },
  module: {
    rules: [
      {
        // 告诉webpack匹配什么文件,通常设置为正则表达式
        test: /\.ts$/,
        exclude: /node_modules/,
        // 将typescript转换为JavaScript(babel-loader和ts-loader都可以实现功能)
        /*
         Q:ts-loader与babel-loader的选择?
         ts-loader:只能将ts转换为js，没有polyfill
         babel-loader:将ts转为js，但是不会进行错误校验，可以实现polyfill
         
         TODO：那么怎么综合两者的优点达到最佳解决方案呢？
         两者都要使用，转化的时候使用babel-loader，类型检测的时候使用ts-loader
         1.在package.json的scripts种添加两个脚本，进行类型检查。
         2.执行npm run type-check对ts代码类型进行类型检查，使用npm run type-check-watch实时类型检查
        */
        use: "babel-loader"
      }
    ]
  }
};
