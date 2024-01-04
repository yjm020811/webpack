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
  module: {
    rules: [
      {
        // 告诉webpack匹配什么文件,通常设置为正则表达式
        test: /\.css$/,
        // loader的顺序按从右到左
        // 只使用css-loader只能使得webpack对css文件进行解析，无法将css注入我们的js代码中，
        // 可以使用style-loader将我们引入的css文件注入到代码中
        // TODO:postcss-loader
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
};
