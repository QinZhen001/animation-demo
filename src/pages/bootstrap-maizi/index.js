require("expose-loader?$!../../common/js/jquery-3.3.1.min.js");

// html
import "./index.html"


// js
import "./js/wow.min"
import "./js/bootstrap.min"
import "./js/jquery.singlePageNav.min"

// css
import "./css/bootstrap.min.css"
import "./css/animate.css"
import "./css/bootstrap-maizi.css"

$(function () {
//      导航跳转插件
  $('.nav').singlePageNav({offset: 70});
  $(".navbar-collapse a").click(function () {
    $('.navbar-collapse').collapse('hide');
  });
  console.log("WOW", WOW)
  new WOW().init();
});