import { sum } from "./utils/math";
import "./style.css";
const message = "Hello World!";

console.log(sum(20, 30));
console.log(sum(10, 2));
console.log(message.length);

const bar = () => {
  console.log("bar funcrtion www");
  console.log("哈哈哈哈哈");
};

bar();

function sum1(num1, num2) {
  // return num1 + num2;
  alert(num1 + num2);
}
// sum1(1, 1);

// const h2El = document.createElement("h2");
// h2El.textContent = "Hello World";
// h2El.className = "title";
// document.body.append(h2El);
