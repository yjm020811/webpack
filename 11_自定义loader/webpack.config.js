const path = require("path");
module.exports = {
  mode: "development",
  // 配置的入口
  entry: "./src/index.js",
  // 配置的出口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  // 自定义loader
  // loader的本质：导出为函数的JavaScript模块
  module: {
    rules: [
      {
        test: /\.js$/,
        // 1.执行顺序:从下网上,从右往左
        use: [
          // "./jm-loaders/loader01.js",
          // "./jm-loaders/loader02.js",
          // "./jm-loaders/loader03.js"
          // 2.自定义loader传递参数
          {
            loader: "./jm-loaders/loader04.js",
            options: {
              name: "yjm",
              age: 21
            }
          }
        ]
      }
    ]
  }
};
