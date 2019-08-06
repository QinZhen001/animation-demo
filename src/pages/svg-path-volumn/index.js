import "./index.html"


let volumnPath = document.querySelector('.volumn-path')
// 输出path在长度为100的位置的点坐标
console.log(volumnPath.getPointAtLength(100))
// 输出当前path的总长度
console.log(volumnPath.getTotalLength());

let $volumnController = document.querySelector('.volumn-controller'),
  $volumnPath = $volumnController.querySelector('.volumn-path');


//得到当前路径的总长度
let pathTotalLength = $volumnPath.getTotalLength() >> 0;
let points = []
//起始位置为长度为0的位置
let startX = Math.round($volumnPath.getPointAtLength(0).x)
//记录下每个x对应的path长度
let volumnDistances = []
//每隔一个像素点距离就保存一下路径上的点的坐标
for (let i = 0; i < pathTotalLength; i++) {
  let p = $volumnPath.getPointAtLength(i);
  // 保存的坐标四舍五入 可以平衡误差
  let x = Math.round(p.x) - startX
  points[x] = Math.round(p.y)
  volumnDistances[x] = i
}

//    console.log(points)
//    这里用一个p0ints数组来保存，它的索引index就为x坐标，值为y坐标。
//    在这个例子里面，总长度为451.5px，得到的points数组长度为388

//    然后监听鼠标事件，得到x坐标，查询y坐标，动态地改变circle的圆心位置

let $dragButton = $volumnController.querySelector('.drag-button'),
  // 得到起始位置相对当前视窗的位置，相当于jQuery.fn.offset
  dragButtonPos = $dragButton.getBoundingClientRect()

let $text = $volumnController.querySelector('.text')


$volumnPath.addEventListener('click', movePoint)
$dragButton.addEventListener('mousedown', function (event) {
  document.body.classList.add('dragging')
  document.addEventListener('mousemove', movePoint);

});
document.addEventListener('mouseup', function () {
  document.body.classList.remove('dragging')
  document.removeEventListener('mousemove', movePoint);
});

function movePoint(event) {
  // 当前鼠标的位置减去圆心起始位置就得到移位偏差，12是半径值，这里先直接写死
  let diffx = event.clientX - Math.round(dragButtonPos.left + 12)
  //需要做个边界判断
  diffx < 0 && (diffx = 0)
  diffx >= points.length && (diffx = points.length - 1)
  $dragButton.setAttribute('cx', diffx + startX)
  // 使用points数组得到y坐标
  $dragButton.setAttribute('cy', points[diffx])

  let volumnValue = Math.round(volumnDistances[diffx] / pathTotalLength * 100)
  $text.textContent = `Volumn ${volumnValue}`
}


