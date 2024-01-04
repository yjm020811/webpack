const path = require("path");
// 1.html-webpack-plugin:生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 2.webpack内置插件:定义全局常量
const { DefinePlugin } = require("webpack");
// 3.copy-webpack-plugin:对于文件进行复制
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 默认是production,有production,development,none
  mode: "development",
  // 从已转换的代码映射到源文件，快速定位自己代码的bug，方便调试
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
    // 重新打包时,先将之前打包的文件夹删除掉
    clean: true
  },
  // loader与plugin的区别：loader是用来转换某些类型的模块；plugin是用来进行更广泛的功能，例如打包优化，资源的管理等
  plugins: [
    new HtmlWebpackPlugin({
      // 打包出的html的title
      title: "yjm",
      // 打包出的html的文件名
      filename: "app.html",
      //如果自己有html模板，则可以选择指向自己的html文件，因为正常情况是会生成新的html
      template: path.resolve(__dirname, "public/index.html")
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: { ignore: ["**/index.html", "**/abc.txt"] }
        }
      ]
    })
  ]
};
