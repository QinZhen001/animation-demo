!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=172)}({0:function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function d(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],l=e.base?i[0]+e.base:i[0],c=t[l]||0,s="".concat(l," ").concat(c);t[l]=c+1;var b=d(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==b?(a[b].references++,a[b].updater(p)):a.push({identifier:s,updater:m(p,e),references:1}),r.push(s)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,b=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,u=0;function m(n,e){var t,r,o;if(e.singleton){var i=u++;t=h||(h=c(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=c(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=d(t[r]);a[o].references--}for(var i=l(n,e),c=0;c<t.length;c++){var s=d(t[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=i}}}},1:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(l," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,d,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},172:function(n,e,t){"use strict";t(173),t(174),t(176)},173:function(n,e){n.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title>一个漂亮的加载动画</title>\r\n</head>\r\n<body>\r\n<div class="wrapper wrapper-1">\r\n    <div class="logo">\r\n        <div class="white"></div>\r\n        <div class="orange"></div>\r\n        <div class="red"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class="wrapper wrapper-2">\r\n    <div class="donut"></div>\r\n</div>\r\n\r\n<div class="text-content">\r\n    <div>\r\n        交错动画\r\n    </div>\r\n    <div>\r\n        所谓的交错动画：通过设置不同的延迟时间，达到动画交错播放的效果。\r\n    </div>\r\n    <div>\r\n        CSS动画有延迟（delay）这一属性。举个栗子，比如有十个元素播放十个动画，将第二个元素的动画播放时间设定为比第一个元素晚0.5秒（也就是将延迟设为0.5秒），其他元素以此类推，这样它们就会错开来，形成一种独特的视觉效果。\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class="wrapper wrapper-3">\r\n    <div class="loading">\r\n        <div class="dot"></div>\r\n        <div class="dot"></div>\r\n        <div class="dot"></div>\r\n        <div class="dot"></div>\r\n        <div class="dot"></div>\r\n    </div>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n'},174:function(n,e,t){var r=t(0),o=t(175);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},175:function(n,e,t){(e=t(1)(!1)).push([n.i,".text-content {\n  margin: 10px 0;\n  padding: 0 20px;\n  -webkit-font-smoothing: antialiased;\n  font-size: 18px;\n  line-height: 1.5;\n}\n.wrapper {\n  padding: 20px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.wrapper-1 .logo {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: white;\n}\n.wrapper-1 .logo > div {\n  position: absolute;\n  opacity: 0;\n}\n.wrapper-1 .logo::before,\n.wrapper-1 .logo::after {\n  position: absolute;\n  width: 0;\n  height: 0;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  content: '';\n  border: 4px solid transparent;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n.wrapper-1 .logo::before {\n  top: 0;\n  left: 0;\n  border-top-color: black;\n  border-right-color: black;\n  -webkit-animation: border-before 1.5s infinite;\n          animation: border-before 1.5s infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n.wrapper-1 .logo::after {\n  bottom: 0;\n  right: 0;\n  border-bottom-color: red;\n  border-left-color: red;\n  -webkit-animation: border-after 1.5s infinite;\n          animation: border-after 1.5s infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n.wrapper-1 .logo .white {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  border-left: 4px solid black;\n  -webkit-animation: white 1.5s infinite;\n          animation: white 1.5s infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n.wrapper-1 .logo .orange {\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 0;\n  border-top: 4px solid black;\n  background-color: #F3B93F;\n  -webkit-animation: orange 1.5s infinite;\n          animation: orange 1.5s infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n.wrapper-1 .logo .red {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  border-right: 4px solid black;\n  background-color: #EA5664;\n  -webkit-animation: red 1.5s infinite;\n          animation: red 1.5s infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n@-webkit-keyframes border-before {\n  from {\n    width: 0;\n    height: 0;\n    border-top-color: black;\n    border-right-color: transparent;\n  }\n  12.49% {\n    border-right-color: transparent;\n  }\n  12.5% {\n    height: 0;\n    width: 100%;\n    border-top-color: black;\n    border-right-color: black;\n  }\n  25%,\n  to {\n    width: 100%;\n    height: 100%;\n    border-top-color: black;\n    border-right-color: black;\n  }\n}\n@keyframes border-before {\n  from {\n    width: 0;\n    height: 0;\n    border-top-color: black;\n    border-right-color: transparent;\n  }\n  12.49% {\n    border-right-color: transparent;\n  }\n  12.5% {\n    height: 0;\n    width: 100%;\n    border-top-color: black;\n    border-right-color: black;\n  }\n  25%,\n  to {\n    width: 100%;\n    height: 100%;\n    border-top-color: black;\n    border-right-color: black;\n  }\n}\n@-webkit-keyframes border-after {\n  from,\n  24.99% {\n    width: 0;\n    height: 0;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n  }\n  25% {\n    width: 0;\n    height: 0;\n    border-left-color: transparent;\n    border-bottom-color: red;\n  }\n  37.49% {\n    border-left-color: transparent;\n    border-bottom-color: red;\n  }\n  37.5% {\n    height: 0;\n    width: 100%;\n    border-bottom-color: red;\n    border-left-color: red;\n  }\n  50%,\n  100% {\n    width: 100%;\n    height: 100%;\n    border-left-color: red;\n    border-bottom-color: red;\n  }\n}\n@keyframes border-after {\n  from,\n  24.99% {\n    width: 0;\n    height: 0;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n  }\n  25% {\n    width: 0;\n    height: 0;\n    border-left-color: transparent;\n    border-bottom-color: red;\n  }\n  37.49% {\n    border-left-color: transparent;\n    border-bottom-color: red;\n  }\n  37.5% {\n    height: 0;\n    width: 100%;\n    border-bottom-color: red;\n    border-left-color: red;\n  }\n  50%,\n  100% {\n    width: 100%;\n    height: 100%;\n    border-left-color: red;\n    border-bottom-color: red;\n  }\n}\n@-webkit-keyframes red {\n  from,\n  50% {\n    width: 0;\n    opacity: 0;\n  }\n  50.01% {\n    opacity: 1;\n  }\n  65%,\n  to {\n    opacity: 1;\n    width: 27%;\n  }\n}\n@keyframes red {\n  from,\n  50% {\n    width: 0;\n    opacity: 0;\n  }\n  50.01% {\n    opacity: 1;\n  }\n  65%,\n  to {\n    opacity: 1;\n    width: 27%;\n  }\n}\n@-webkit-keyframes orange {\n  from,\n  65% {\n    height: 0;\n    opacity: 0;\n  }\n  65.01% {\n    opacity: 1;\n  }\n  80%,\n  to {\n    opacity: 1;\n    height: 50%;\n  }\n}\n@keyframes orange {\n  from,\n  65% {\n    height: 0;\n    opacity: 0;\n  }\n  65.01% {\n    opacity: 1;\n  }\n  80%,\n  to {\n    opacity: 1;\n    height: 50%;\n  }\n}\n@-webkit-keyframes white {\n  from,\n  75% {\n    width: 0;\n    opacity: 0;\n  }\n  75.01% {\n    opacity: 1;\n  }\n  90%,\n  100% {\n    opacity: 1;\n    width: 23%;\n  }\n}\n@keyframes white {\n  from,\n  75% {\n    width: 0;\n    opacity: 0;\n  }\n  75.01% {\n    opacity: 1;\n  }\n  90%,\n  100% {\n    opacity: 1;\n    width: 23%;\n  }\n}\n.wrapper-2 .donut {\n  display: inline-block;\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  border-left-color: #7983ff;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  -webkit-animation: donut-spin 1.2s linear infinite;\n          animation: donut-spin 1.2s linear infinite;\n}\n@-webkit-keyframes donut-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes donut-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n",""]),n.exports=e},176:function(n,e,t){var r=t(0),o=t(177);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},177:function(n,e,t){(e=t(1)(!1)).push([n.i,'.wrapper-3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.wrapper-3 .loading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-animation-delay:1s;animation-delay:1s}.wrapper-3 .loading .dot{position:relative;width:2em;height:2em;margin:0.8em;border-radius:50%}.wrapper-3 .loading .dot::before{position:absolute;content:"";width:100%;height:100%;background:inherit;border-radius:inherit;-webkit-animation:wave 2s ease-out infinite;animation:wave 2s ease-out infinite}.wrapper-3 .loading .dot:nth-child(1){background:#7ef9ff}.wrapper-3 .loading .dot:nth-child(1)::before{-webkit-animation-delay:.2s;animation-delay:.2s}.wrapper-3 .loading .dot:nth-child(2){background:#89cff0}.wrapper-3 .loading .dot:nth-child(2)::before{-webkit-animation-delay:.4s;animation-delay:.4s}.wrapper-3 .loading .dot:nth-child(3){background:#4682b4}.wrapper-3 .loading .dot:nth-child(3)::before{-webkit-animation-delay:.6s;animation-delay:.6s}.wrapper-3 .loading .dot:nth-child(4){background:#0f52ba}.wrapper-3 .loading .dot:nth-child(4)::before{-webkit-animation-delay:.8s;animation-delay:.8s}.wrapper-3 .loading .dot:nth-child(5){background:navy}.wrapper-3 .loading .dot:nth-child(5)::before{-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes wave{50%,75%{-webkit-transform:scale(2.5);transform:scale(2.5)}80%,100%{opacity:0}}@keyframes wave{50%,75%{-webkit-transform:scale(2.5);transform:scale(2.5)}80%,100%{opacity:0}}\n',""]),n.exports=e}});