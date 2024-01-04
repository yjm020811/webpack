/** 
   1.概念：
  postcss的作用：使用JavaScript进行转换样式的工具
 可以进行css的转换和适配
 2.使用方式:
    2.1查找postcss相关扩展，比如webpack中的postcss-loader
    2.2选择添加需要的postcss相关插件
**/

module.exports = {
  plugins: ["postcss-preset-env"]
};
