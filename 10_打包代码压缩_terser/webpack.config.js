const path = require("path");
const glob = require("glob");
// 代码压缩
const TerserPlugin = require("terser-webpack-plugin");
// 将css提取到一个独立的css文件中
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 对css进行压缩的插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 对css进行tree-shaking
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
// html-webpack-plugin:生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(
  glob.sync(`${path.join(__dirname, "./src")}/**/*`, { nodir: true })
);

module.exports = {
  mode: "development",
  // 配置的入口
  entry: "./src/index.js",
  // 配置的出口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
    clean: true
  },
  module: {
    rules: [
      {
        //告诉webpack匹配什么文件
        test: /\.css$/,
        // 从右向左的顺序
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  optimization: {
    // Tree Shaking 在生产环境下默认启动。如果想在开发环境启动 Tree Shaking，需要配置： usedExports: true
    usedExports: true,
    // 压缩JS代码
    minimize: true,
    minimizer: [
      // JS压缩插件
      new TerserPlugin({
        extractComments: false, // 是否提取注释
        // terser的相关配置
        terserOptions: {
          // 压缩的相关设置选项
          compress: {
            drop_console: true // 是否删除console
          }
        }
      }),
      // CSS压缩插件
      new CssMinimizerPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    // 对于css进行tree-shaking
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "./src")}/**/*`, {
        nodir: true
      }),
      safelist: function () {
        return ["body"];
      }
    }),
    new HtmlWebpackPlugin({
      // 打包出的html的title
      title: "yjm",
      // 打包出的html的文件名
      filename: "app.html",
      //如果自己有html模板，则可以选择指向自己的html文件，因为正常情况是会生成新的html
      template: path.resolve(__dirname, "index.html"),
      // 对于html是否进行压缩
      minify: true
    })
  ]
};
