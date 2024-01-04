import _ from "lodash";
import dayjs from "dayjs";
console.log(dayjs().format("YYYY-MM-DD"), "index");

console.log("hello index");
console.log(_, "index");

// 只要是异步导入的代码，webpack都会将其打包为一个独立的js文件
import("./foo").then((res) => {
  console.log(res);
});
