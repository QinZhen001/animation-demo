// https://juejin.cn/post/6906709240329535495?utm_source=gold_browser_extension#heading-4

import "./index.html"
import "./index.less"



let wrap = document.querySelector('.wrap');//获取外框，以便设置图片滚动的宽度
let list = wrap.querySelector('.list');//图片列表
let dot = wrap.querySelectorAll('.dot li');//小点


let stratpoint = {} //鼠标按下的起始点
let distance = {} //距离
let startOffset = 0 //记录鼠标按下时图片列表的位置  
let translatex = 0; //移动的距离
let now = 0; //当前在那一张
let imgW = wrap.offsetWidth;//获取一下外框的宽度
let proportion = 0.3;//当图片拖动超过整体宽度的比例时，跳转到下一张或者上一章
let isMove = false;

list.innerHTML += list.innerHTML;//复制图片列表


wrap.addEventListener('')