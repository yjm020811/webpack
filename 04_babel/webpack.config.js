const path = require("path");

module.exports = {
  // 默认是production,有production,development,none
  mode: "development",
  devtool: "eval",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // 重新打包时,先将之前打包的文件夹删除掉
    clean: true
  },
  // 使用babel-loader
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"] // 根据.browserslistrc里面的配置进行对应浏览器的适配
          }
        }
      }
    ]
  }
};
