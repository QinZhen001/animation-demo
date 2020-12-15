function isPromise(ret) {
  return (
    ret && typeof ret.then === 'function' && typeof ret.catch === 'function'
  )
}

function errorHandler(error, vm, info) {
  console.error('捕获全局错误 errorHandler', error, vm, info)
}


function registerActionHandle(actions){
  Object.keys(actions).forEach(key => {
    let fn = actions[key]
    actions[key] = function (...args) {
        let ret = fn.apply(this, args)
        if (isPromise(ret)) {
            return ret.catch(errorHandler)
            // return ret
        } else { // 默认错误处理
            return ret
        }
    }
  })
}

function registerVue(instance) {
  console.log('instance.$options.methods', instance.$options.methods)
  if (instance.$options.methods) {
    let actions = instance.$options.methods || {}
    if (actions) {
      registerActionHandle(actions)
    }
  }
}

const GlobalError = {
  install(Vue, options) {
    // Vue.config.errorHandler 会捕获同步的错误
    Vue.config.errorHandler = errorHandler
    Vue.prototype.$throw = errorHandler
    // Vue.mixin({
    //   beforeCreate() {
    //     registerVue(this)
    //   },
    // })
  },
}

export default GlobalError
