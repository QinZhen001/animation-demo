!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var l = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(l.exports, l, l.exports, r), (l.l = !0), l.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var l in t)
          r.d(
            n,
            l,
            function (e) {
              return t[e];
            }.bind(null, l)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 156));
})({
  156: function (t, e, r) {
    "use strict";
    r(157);
    var n = [
        { title: "3d-page-turning 3d翻书效果", url: "3d-page-turning" },
        { title: "bump-box 改变边框的盒子", url: "bump-box" },
        { title: "inverted-triangle 页面三角", url: "inverted-triangle" },
        { title: "svg-path-volumn svg进度条", url: "svg-path-volumn" },
        { title: "seamless-rolling 轮播图", url: "seamless-rolling" },
        { title: "clip-path svg遮罩", url: "clip-path" },
        { title: "fake-input-box 仿ofo输入框", url: "fake-input-box" },
        { title: "flash-banner 仿FLASH的图片轮换播放器", url: "flash-banner" },
        { title: "hand-code-svg 自己画svg", url: "hand-code-svg" },
        { title: "list-expend 列表展开效果", url: "list-expend" },
        { title: "button 按钮动画", url: "button" },
        { title: "demo 其他动画", url: "demo" },
        {
          title: "bootstrap-maizi 利用bootstrap库做的动画",
          url: "bootstrap-maizi",
        },
        { title: "loading 加载动画", url: "loading" },
        { title: "parallax 滚动视差", url: "parallax" },
        { title: "water-wave 水波效果", url: "water-wave" },
        { title: "滤镜效果", url: "filter" },
        { title: "vue-list 动画", url: "vue-list-animation" },
      ],
      l = document.body,
      i = document.createElement("ul");
    n.sort(function (t, e) {
      var r = t.title,
        n = e.title;
      return r.charCodeAt(0) - n.charCodeAt(0);
    }),
      n.forEach(function (t) {
        var e = t.title,
          r = t.url ? t.url : e.split(" ")[0];
        r += ".html";
        var n = document.createElement("li"),
          l = document.createElement("a");
        (l.innerText = e),
          l.setAttribute("href", r),
          n.appendChild(l),
          i.appendChild(n);
      }),
      l.appendChild(i);
  },
  157: function (t, e) {
    t.exports =
      '<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title>前端动画效果集合</title>\r\n    <style>\r\n        li {\r\n            font-size: 20px;\r\n            height: 40px;\r\n            line-height: 40px;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<h1>前端动画效果集合</h1>\r\n</body>\r\n</html>\r\n';
  },
});
