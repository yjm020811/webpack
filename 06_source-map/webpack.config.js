const path = require("path");
module.exports = {
  // 默认是production,有production,development,none
  mode: "development",
  // 从已转换的代码映射到源文件，快速定位自己代码的bug，方便调试
  /*
    在进行代码调试的时候需要设置为"source-map"，会生成source-map
    devtool有其他几个值不会生成source-map
    1.false：不使用source-map，也就是没有任何和source-map相关的内容
    2.none：production模式下的默认值（什么值都不写）,不生成source-map
    3.eval:development模式下的默认值，不生成source-map，设置为默认值，方便开发者在development模式下调试
   */
  // devtool: "eval",
  devtool: "cheap-source-map", // 此选项控制是否生成，以及如何生成 source-map
  /* 
    1.eval-source-map:会生成source-map，但是source-map是以DataUrl添加到函数的后面
    2.inline-source-map:会生成source-map，但是source-map是以DataUrl添加到bundle文件的后面
    3.cheap-module-source-map：会生成source-map，类似于cheap-source-map,会更加高效，因为没有生成列映射，且对于loader的source-map处理更好
    开发阶段推荐source-map(vue使用)或者cheap-module-source-map(react使用)，在生产环境就不用写了
  */
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
    // 重新打包时,先将之前打包的文件夹删除掉
    clean: true
  },
  module: {
    rules: []
  }
};
