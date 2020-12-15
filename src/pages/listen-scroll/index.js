import './index.html'
import './index.less'
import '../../common/less/index.less'
import Vue from 'vue'
import errorHandler from './errorHandler/index'
// import Err from './err.vue'

const TAB_BAR_DATA = [
  {
    text: '测评结果',
    className: 'rank',
    active: true,
  },
  {
    text: '试卷概述',
    className: 'paper',
    active: false,
  },
  {
    text: '答题情况',
    active: false,
    className: 'answer',
  },
  {
    text: '知识分析',
    className: 'analysis',
    active: false,
  },
  {
    text: '学习建议',
    className: 'suggest',
    active: false,
  },
  {
    text: '学习建议1',
    className: 'suggest1',
    active: false,
  },
  {
    text: '学习建议2',
    className: 'suggest2',
    active: false,
  },
  {
    text: '学习建议3',
    className: 'suggest3',
    active: false,
  },
]

// function awaitTime(time = 2000){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       throw new Error('Promise 里面的 error')
//       resolve(true)
//     },time)
//   })
// }


Vue.use(errorHandler)
var app = new Vue({
  el: '#app',
  components: {
    // Err
  },
  render(h) {
    return (
      <div>
        {/* <err></err> */}
        <div class="tabbar">
          {/* {this.listData.map((item, index) => (
            <li class={[{ active: item.active }, 'item']}>
              <span>{item.text}</span>
            </li>
          ))} */}
          <div onClick={()=>this.test1()}>test1</div> 
          <div onClick={()=>this.test2()}>test2</div> 
          <div onClick={()=>this.test3()}>test3</div> 
        </div>
        <ul class="list">
          {this.listData.map((item, index) => (
            <li class={`${item.className} item item-${index}`}>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  // template:"<div>213131</div>",
  data: {
    listData: TAB_BAR_DATA,
  },
  mounted() {
    // setInterval(()=>{
    //   this.test()
    // },2000)
    console.log('window.performance.timing', window.performance.timing)
    window.onload = () => {
      console.log('window.performance.timing111', window.performance.timing)
    }
  },
  destroyed() {},
  methods: {
    test1() {
      console.log('test1')
    },
    async test2() {
      // throw new Error('test2')
      // await awaitTime()  
      setTimeout(()=>{
        throw new Error('test2')
      })
      return "aaaa"
    },
     test3() {
      console.log('test3 async')
      throw new Error('test3')
    },
  },
})
