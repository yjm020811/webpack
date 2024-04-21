const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoUploadWebpackPlugin = require('./plugins/AutoUploadWebpackPlugin')
const path = require('path')

module.exports = {
    entry: './src/main.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    plugins: [
        // 插件配置
        new HtmlWebpackPlugin(),
        new AutoUploadWebpackPlugin()
    ]
}