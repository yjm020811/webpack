const { validate } = require('schema-utils');
const loader04Schema = require('../schema/locader04_schema.json');

module.exports = function (content) {
  // 1.获取使用loader时传递进来的参数:this.getOptions()直接获取到参数
  const options = this.getOptions();
  console.log('传递的参数', options);

  // 2.校验参数
  validate(loader04Schema, options)
  return content;
};
