const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// vue处理热更新的的时候，已经默认处理了热更新的问题了
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  // 配置的入口
  entry: "./src/index.js",
  // 配置的出口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  // 设置模块如何被解析：常见的extensions（解析文件的自动添加的扩展名）和alias
  resolve: {
    extensions: [".js", ".vue"],
    // 解决项目目录层级比较深的情况
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      // 处理css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new VueLoaderPlugin()
  ],
  // 配置开发服务
  devServer: {
    host: "localhost",
    // 开启热更新
    hot: true,
    static: {
      directory: path.join(__dirname, "./")
    },
    port: 9000,
    // 对文件进行压缩（gzip）
    compress: true,
    // 配置代理。解决跨域
    proxy: {
      // 将/api开头的请求代理到http://localhost:3000
      "/api": {
        target: "http://localhost:3000",
        // 可选的路径重写规则
        pathRewrite: {
          "^/api": ""
        },
        secure: false, //在开发中通常不验证SSL证书
        changeOrigin: true //当设置为true时，会更改请求标头中的“Origin”字段，以便让服务器知道请求的来源已更改。
      }
    },
    // 解决history模式路由刷新的错误
    // 如果我们在本地开启服务器，此时当我们进行刷新时，浏览器会拿着该地址localhost:3000/home向本地服务器发起请求，
    // 但是本地不存在/home的文件夹，所以会返回404。在开发环境为了解决这个问题，则配置这个（history存在，hash不存在）
    // 开发模式这样配置，生产模式需要配置nginx
    historyApiFallback: true
  }
};
