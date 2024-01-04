const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
// 生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 压缩css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  // 打包的入口
  // entry: "./src/index.js", //打包单个
  entry: ["./src/index.js", "./src/demo.js"], // 打包多个
  // 配置的出口
  output: {
    // 打包后的文件的输出
    path: path.resolve(__dirname, "build"),
    // 在打包之后的静态资源的前面进行路径拼接
    //   js/bundle.js -> ./js/bundle.js
    // 如果直接打开打包后的index.html就需要配置，如果在devServer下就不用
    // publicPath: "./",
    // 打包出来的文件夹的名字
    filename: "bundle.js",
    // 清空原先的打包的文件
    clean: true,
    // 非初始chunk文件的名称
    chunkFilename: "asset_[id].js"
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".jsx"]
  },
  // 构建模式
  // mode: "production",
  mode: "development",
  // 生产模式
  devtool: "source-map", // 打包慢一点，但是错误提示精确
  // loader：用于对特定的模块类型进行转换
  module: {
    rules: [
      {
        //告诉webpack匹配什么文件
        test: /\.css$/,
        // 从右向左的顺序
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        //对于图片进行打包
        // 对于小一点的图片,可以进行base64编码（优点：减少请求数量 缺点：图片资源体积稍微变大）
        // 对于大一点的图片,可以对图片进行单独的打包
        type: "asset",
        // 设置type: "asset"是常见的做法，但是还有两种
        // 1.type:"asset/resource",实现file-loader的效果
        // 2.type:"asset/inline",实现url-loader的效果
        parser: {
          dataUrlCondition: {
            // 小于10kb，转为base64，大于10kb，单独打包
            maxSize: 10 * 1024
          }
        },
        //  打包图片的出口
        generator: {
          // 使用占位符
          // name:指向原来图片的名称
          //ext:扩展名
          // hash:webpack生成的hash值
          filename: "img/[name]_[hash][ext]"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 字体的打包
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash][ext]"
        }
      }
    ]
  },
  //  plugin：用于执行更加广泛的任务，例如打包优化，资源管理等
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // 打包出的html的title
      title: "yjm",
      // 打包出的html的文件名
      filename: "app.html"
      //如果自己有html，则可以选择指向自己的html文件，因为正常情况是会生成新的html
      // template:path.resolve(__dirname,"public/index.html")
    }),
    new MiniCssExtractPlugin()
  ],
  // 专门为开发过程中，开启一个本地服务
  devServer: {
    port: 8888,
    open: true
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
};
