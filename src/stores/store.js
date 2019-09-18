import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {//数据

  },
  mutations: {//处理数据,当外部有数据传递来，调用这里的方法，修改store里边的状态管理公共数据

  },
  actions: {

  },
  getters: {//返回变化数据，一旦外部需要数据返回，这里return一个值，外部调用获取这里的返回值

  },
  modules: {//模块化写法
    city//引入city模块，并挂载在实例上
  }
})
