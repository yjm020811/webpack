import { sum } from "./utils/math";
const message = "Hello World!";
import Vue from "vue";

console.log(sum(10, 30));
console.log(sum(10, 2));
console.log(message.length);

const bar = () => {
  console.log("bar funcrtion www");
  console.log("哈哈哈哈哈");
  console.log("abc111");
};

bar();

// vue的HMR热更新
import { createApp } from "vue";

// 因为我在resolve的extensions添加了.vue的扩展名，所以这里app.vue可以缩写为app
import App from "./app";

const app = createApp(App);

app.mount("#app");
