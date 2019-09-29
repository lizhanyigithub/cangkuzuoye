import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    n:0
  },
  mutations: {
    jian(state){
      state.n=state.n-1
    },
    jia(state){
      state.n=state.n+1
    }
  },
  actions: {

  }
})
