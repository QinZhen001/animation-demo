import "./index.html"
import "./index.less"

//  ui来自https://github.com/weui/weui-wxss
let arr = [...document.getElementsByClassName('weui-cells')]
let btn = document.getElementsByTagName('button')[0]
let showFlag = true
btn.addEventListener('click', () => {
  arr.forEach(item => {
    if (showFlag) {
      item.classList.add('weui-cells_show')
    } else {
      item.classList.remove('weui-cells_show')
    }
  })
  showFlag = !showFlag
})