!function(n){var e={};function r(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=147)}({0:function(n,e,r){"use strict";var t,i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function l(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],i=0;i<n.length;i++){var o=n[i],c=e.base?o[0]+e.base:o[0],s=r[c]||0,u="".concat(c," ").concat(s);r[c]=s+1;var d=l(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:y(f,e),references:1}),t.push(u)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,r,t){var i=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function p(n,e,r){var t=r.css,i=r.media,o=r.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,g=0;function y(n,e){var r,t,i;if(e.singleton){var o=g++;r=h||(h=s(e)),t=f.bind(null,r,o,!1),i=f.bind(null,r,o,!0)}else r=s(e),t=p.bind(null,r,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var i=l(r[t]);a[i].references--}for(var o=c(n,e),s=0;s<r.length;s++){var u=l(r[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=o}}}},1:function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var i=(a=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),o=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(o).concat([i]).join("\n")}var a,l,c;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);t&&i[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},147:function(n,e,r){"use strict";r(148),r(149)},148:function(n,e){n.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Hand Coded SVG</title>\r\n</head>\r\n<body>\r\n\r\n<div class="grid">\r\n\r\n    <svg width="750" height="500">\r\n        <defs>\r\n            <g id="leftalign">\r\n                \x3c!-- Left align icon made with lines --\x3e\r\n                <line x1="3" y1="3" x2="48" y2="3"></line>\r\n                <line x1="3" y1="19" x2="65" y2="19"></line>\r\n                <line x1="3" y1="35" x2="48" y2="35"></line>\r\n                <line x1="3" y1="51" x2="65" y2="51"></line>\r\n            </g>\r\n\r\n            <g id="rightcaret">\r\n                \x3c!-- Right caret icon made with a polyline --\x3e\r\n                <polyline points="\r\n  3 3\r\n  30 28\r\n  3 53\r\n"></polyline>\r\n            </g>\r\n\r\n            <g id="browser">\r\n                \x3c!-- Browser icon made with rectangle and lines --\x3e\r\n                <rect x="3" y="3" width="80" height="60"></rect>\r\n                <line x1="3" y1="19" x2="83" y2="19"></line>\r\n                <line x1="20" y1="3" x2="20" y2="17"></line>\r\n            </g>\r\n\r\n            <symbol id="alert" viewBox="0 0 86 86">\r\n                \x3c!-- Alert icon made with ellipses and a line --\x3e\r\n                <ellipse cx="43" cy="43" rx="40" ry="40"></ellipse>\r\n                <ellipse style="fill:black;" cx="43" cy="65" rx="5" ry="5"></ellipse>\r\n                <line style="stroke-width: 8;" x1="43" y1="19" x2="43" y2="48"></line>\r\n            </symbol>\r\n\r\n            <symbol id="play" viewBox="0 0 86 86">\r\n                \x3c!-- Play icon made with ellipse and polygon --\x3e\r\n                <ellipse cx="43" cy="43" rx="40" ry="40"></ellipse>\r\n                <polygon points="35 23, 60 43, 35 63"/>\r\n            </symbol>\r\n\r\n            <symbol id="download" viewBox="0 0 64 71">\r\n                \x3c!-- Download icon made with path --\x3e\r\n                <path d="\r\n  M 18 3\r\n  L 46 3\r\n  L 46 40\r\n  L 61 40\r\n  L 32 68\r\n  L 3 40\r\n  L 18 40\r\n  Z\r\n"></path>\r\n            </symbol>\r\n\r\n        </defs>\r\n\r\n        <use href="#leftalign" x="100" y="100"></use>\r\n\r\n        <use href="#rightcaret" x="300" y="100"></use>\r\n\r\n        <use href="#browser" x="500" y="100"></use>\r\n\r\n        <use href="#alert" x="100" y="200" width="100" height="100"></use>\r\n\r\n        <use href="#play" x="300" y="200" width="100" height="100"></use>\r\n\r\n        <use href="#download" x="500" y="200" width="100" height="100"></use>\r\n\r\n    </svg>\r\n\r\n</div>\r\n\r\n</body>\r\n</html>\r\n'},149:function(n,e,r){var t=r(0),i=r(150);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);n.exports=i.locals||{}},150:function(n,e,r){var t=r(1),i=r(17),o=r(151);e=t(!1);var a=i(o);e.push([n.i,"html, body {\r\n    height: 100%;\r\n    width: 100%;\r\n    background: #e9e9e9;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\n.grid {\r\n    width: 750px;\r\n    height: 500px;\r\n    margin: 0 auto;\r\n    padding-top: 100px;\r\n    padding-left: 100px;\r\n    background-image: url("+a+');\r\n    position: relative;\r\n}\r\n\r\n.grid::before {\r\n    content: "";\r\n    border-left: 1px solid #7c7cea;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 100px;\r\n    width: 750px;\r\n    height: 600px;\r\n}\r\n\r\n.grid::after {\r\n    content: "";\r\n    border-top: 1px solid #7c7cea;\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 0;\r\n    width: 850px;\r\n    height: 500px;\r\n}\r\n\r\nsvg {\r\n    stroke: rgb(0, 0, 0);\r\n    stroke-width: 5;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    fill: none;\r\n}',""]),n.exports=e},151:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAA+klEQVR42u3XwQmEMBRF0edgB1lZgMXbjGUoCKkhU4KBwUH03PXHzQHDG5altXnOabUmpbi7+i7r2rraNnf/uPtEtwoIEAEBIiBABOQFjbUm+35+eBx9H3T3291YSjJNfcfurr/zy/KGCAgQAQEiIEBkqVvqFrOlLiBABASIgAAREEvdUrfU3flleUMEBIiAABEQILLU3Vnqlrq8IUAEBIiAABEQWeqWujtL3RsiIEAEBIiACIil7s5St9TlDQEiIEAERECAyFK31N1Z6t4QAQEiIAICREAsdXeWuqUubwgQAREQIAICRJa6pe7OUveGCIiAABEQIALylL7FCGrU6GPw/gAAAABJRU5ErkJggg=="},17:function(n,e,r){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}}});