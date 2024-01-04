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
  module: {
    rules: [
      {
        test: /\.js$/
      }
    ]
  }
};
