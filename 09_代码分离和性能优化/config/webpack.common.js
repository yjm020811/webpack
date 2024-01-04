const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 将css提取到一个独立的css文件中
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env) {
  const isProduction = env.production;
  return {
    //  打包代码分离：
    entry: {
      main: "./src/main.js",
      index: "./src/index.js"
    },
    mode: "development",
    output: {
      path: path.resolve(__dirname, "../build"),
      // 如果入口文件多个
      // 对应于entry里面生成出来的文件名。
      filename: "js/[name].[contenthash:6].bundle.js",
      clean: true,
      // 非入口文件
      // chunkFilename就是未被列在entry中，但是在entry文件运行需要一些第三方的模块所以将其拆分为独立的js模块。比如按需加载（异步）模块的时候。
      chunkFilename: "js/[name].chunk.js"
    },
    // CDN的配置
    externals: {
      lodash: "_",
      dayjs: "dayjs"
    },
    // 设置模块如何被解析：常见的extensions（解析文件的自动添加的扩展名）和alias
    resolve: {
      extensions: [".js", ".vue"],
      // 解决项目目录层级比较深的情况
      alias: {
        "@": path.resolve(__dirname, "../src")
      }
    },
    // 优化
    optimization: {
      // chunkIds: "named", // 开发环境推荐(正常不用配置，了解)
      chunkIds: "deterministic", // 生产环境推荐
      // SplitChunksPlugin内置插件实现分包
      splitChunks: {
        // async异步导入
        // initial同步导入
        // all异步同步都导入
        chunks: "all",
        // 最小尺寸：如果一个包拆分出来达不到minSize,那么这个包就不会拆分；
        minSize: 20000,
        // 将大于maxSize的包，拆分为不小于minSize的包
        maxSize: 20000,
        // 被引入的包至少被导入使用了几次
        minChunks: 1,
        // 缓存组：用于对拆分的包就行分组，比如一个lodash在拆分之后，并不会立即打包，而是会等到有没有其他符合规则的包一起来打包
        cacheGroups: {
          // 第三方包
          vendors: {
            // 匹配符合规则的包
            test: /[\\/]node_modules[\\/]/,
            filename: "js/[id]_vendors.js",
            // 打包的优先级
            priority: -10,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            /* 对于不同的hash的区别
            1.Hash：一旦项目中有文件改变了，Hash值就会改变
            2.chunkhash：修改一个入口的文件，和这个入口相关的文件hash值都会改变
            3.contenthash：仅改变当前文件内容会改变hash值
            */
            filename: "common_[hash].js"
          }
        }
      },
      // 运行时相关代码是否抽离到一个单独的chunk中
      // runtimeChunk: "single" //将其打包到一个文件中
      // runtimeChunk:true //将其分别打包
      runtimeChunk: {
        name: "runtime.[hash].js"
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
          // 当是开发环境使用style-loader，生成环境使用MiniCssExtractPlugin.loader
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[id].css"
      })
    ]
  };
};
