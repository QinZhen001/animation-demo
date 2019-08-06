import "./index.html"
import "./index.less"


var myBtn = document.getElementsByTagName('button')[0]
myBtn.addEventListener('mousemove', function (e) {
  //计算相对于元素的位置 这里父元素是body所以可以用offsetLeft
  //因为button里面的span元素也会触发mousemove事件 所以要用currentTarget指向注册该事件的对象
  const x = e.pageX - e.currentTarget.offsetLeft
  const y = e.pageY - e.currentTarget.offsetTop

//        console.log('--x', `${ x }px`)
//        console.log('--y', `${ y }px`)

  e.currentTarget.style.setProperty('--x', `${ x }px`)
  e.currentTarget.style.setProperty('--y', `${ y }px`)
})