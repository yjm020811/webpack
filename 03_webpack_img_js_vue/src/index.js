import { sum } from "./utils/math";
import { createApp } from "vue";
import Hello from "./vue_demo/Hello";
import "./component/div.cpn";
import "./css/aaa.scss";
import "./css/font.css";
const message = "Hello World!";

console.log(sum(20, 30));
console.log(sum(10, 2));
console.log(message.length);

// 异步引入文件
import("./log").then((log) => {
  log("chunkFilename");
});

const bar = () => {
  console.log("bar funcrtion www");
  console.log("哈哈哈哈哈");
};

bar();

// vue代码
createApp(Hello).mount("#app");
