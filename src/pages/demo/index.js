import "./index.html"
import "./index.less"

hljs.initHighlightingOnLoad();

// function test() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("setTimeout")
//       resolve("aaaa")
//     }, 5000)
//   })
// }
//
// let taskList = []
//
// function f() {
//   return new Promise(async (resolve, reject) => {
//     console.log("f 开始")
//     let res = await test()
//     console.log("f 结束")
//     resolve(res)
//   })
// }
//
// async function f2() {
//   return new Promise(async (resolve, reject) => {
//     console.log("f2 开始")
//     let res = await test()
//     console.log("f2" + " 结束")
//     resolve(res)
//   })
// }
//
// taskList.push(f(), f2())
//
//
// Promise.all(taskList).then(arr => {
//   console.log("arr",
//     arr)
// })
//
//
// console.log("taskList", taskList)
