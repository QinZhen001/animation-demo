import "./index.html";
import "./index.less";

var myBtn = document.getElementsByTagName("button")[0];
myBtn.addEventListener("mousemove", function (e) {
  //计算相对于元素的位置 这里父元素是body所以可以用offsetLeft
  //因为button里面的span元素也会触发mousemove事件 所以要用currentTarget指向注册该事件的对象
  const x = e.pageX - e.currentTarget.offsetLeft;
  const y = e.pageY - e.currentTarget.offsetTop;

  //        console.log('--x', `${ x }px`)
  //        console.log('--y', `${ y }px`)

  e.currentTarget.style.setProperty("--x", `${x}px`);
  e.currentTarget.style.setProperty("--y", `${y}px`);
});

/**
 * @author zhangxinxu(.com)
 * @description 点击页面任意位置，标记坐标位置
 */
document.addEventListener("mousedown", (event) => {
  var target = event.target;
  var body = document.body;
  var html = document.documentElement;

  // 设置自定义属性
  body.style.setProperty("--pagex", event.pageX);
  body.style.setProperty("--pagey", event.pageY);
  body.style.setProperty("--x", event.pageX);
  body.style.setProperty("--y", event.pageY);


  html.style.setProperty("--clientx", event.clientX);
  html.style.setProperty("--clienty", event.clientY);

  // pageXOffset 和 pageYOffset 属性相等于 scrollX 和 scrollY 属性。
  html.style.setProperty("--scrolly", window.pageYOffset);

  target.parentElement.style.setProperty("--target-width", target.clientWidth);
  target.parentElement.style.setProperty(
    "--target-height",
    target.clientHeight
  );
  target.parentElement.style.setProperty("--target-left", target.offsetLeft);
  target.parentElement.style.setProperty("--target-top", target.offsetTop);
});
