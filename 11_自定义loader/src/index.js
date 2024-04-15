// 导入md
import md from "../src/md/learn.md";
import './md/md.css';
// 将md显示到页面
document.body.innerHTML = md;

const message = "Hello World!";
console.log(message);

const foo = () => {
  console.log("foo");
};
foo();
