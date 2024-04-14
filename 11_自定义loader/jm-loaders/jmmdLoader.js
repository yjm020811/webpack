const { marked } = require('marked')
const hljs = require('highlight.js')

module.exports = function (content) {
    // 让markdown将语法高亮
    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlight(lang, code).value
        }
    })

    // 将markdown内容转换为html内容
    const htmlContent = marked(content)
    console.log(htmlContent);
    // 返回的内容必须是模块化的内容
    return `module.exports = ${JSON.stringify(htmlContent)}`
}