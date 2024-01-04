import "../css/div_style.css";
import "../css/title_style.less";
import "../css/bg_style.css";

// 引入图片模块
import shaokao from "../img/烧烤.png";
import hhh from "../img/小图片.jpg";

// 创建div元素
const divEl = document.createElement("div");

divEl.textContent = "Hello world";
divEl.classList.add("content");

document.body.append(divEl);

// 创建h2元素
const titleEl = document.createElement("h2");
titleEl.textContent = "哈哈哈哈111";
titleEl.classList.add("title");
document.body.append(titleEl);

//创建img元素
const imgEl = document.createElement("img");
imgEl.src = shaokao;
imgEl.src = hhh;
document.body.append(imgEl);

// 创建div元素,设置背景
const divBgEl = document.createElement("div");
divBgEl.classList.add("img-bg");
document.body.append(divBgEl);

// 创建i元素.使用阿里云图标
const iEl = document.createElement("i");
iEl.className = "iconfont icon-caiseluxiang why_icon";
document.body.append(iEl);
