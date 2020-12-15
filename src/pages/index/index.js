// 首页

import "./index.html";

// url拼接上.html
const contents = [
  {
    title: "3d-page-turning 3d翻书效果",
    url: "3d-page-turning",
  },
  {
    title: "bump-box 改变边框的盒子",
    url: "bump-box",
  },
  {
    title: "inverted-triangle 页面三角",
    url: "inverted-triangle",
  },
  {
    title: "svg-path-volumn svg进度条",
    url: "svg-path-volumn",
  },
  {
    title: "seamless-rolling 轮播图",
    url: "seamless-rolling",
  },
  {
    title: "clip-path svg遮罩",
    url: "clip-path",
  },
  {
    title: "fake-input-box 仿ofo输入框",
    url: "fake-input-box",
  },
  {
    title: "flash-banner 仿FLASH的图片轮换播放器",
    url: "flash-banner",
  },
  {
    title: "hand-code-svg 自己画svg",
    url: "hand-code-svg",
  },
  {
    title: "list-expend 列表展开效果",
    url: "list-expend",
  },
  {
    title: "button 按钮动画",
    url: "button",
  },
  {
    title: "demo 其他动画",
    url: "demo",
  },
  {
    title: "bootstrap-maizi 利用bootstrap库做的动画",
    url: "bootstrap-maizi",
  },
  {
    title: "loading 加载动画",
    url: "loading",
  },
  {
    title: "parallax 滚动视差",
    url: "parallax",
  },
  {
    title: "water-wave 水波效果",
    url: "water-wave",
  },
  {
    title: "滤镜效果",
    url: "filter",
  },
  {
    title: "vue-list 动画",
    url: "vue-list-animation",
  },
  {
    title: "mouseover 鼠标滑入动画",
    url: "mouseover",
  },
  {
    title: "corner 棱角效果",
    url: "corner",
  },
  {
    title: "listen-scroll 监听滚动判断元素是否可见",
    url: "listen-scroll",
  },
];

const body = document.body;
// console.log("body", body)

const ul = document.createElement("ul");
contents.sort((a, b) => {
  const titleA = a.title;
  const titleB = b.title;
  return titleA.charCodeAt(0) - titleB.charCodeAt(0);
});
contents.forEach((item) => {
  const title = item.title;
  let url = item.url ? item.url : title.split(" ")[0];
  url += ".html"
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerText = title;
  a.setAttribute("href", url);
  li.appendChild(a);
  ul.appendChild(li);
});

body.appendChild(ul);
