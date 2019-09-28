import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    n:0,
    falg:true
  },
  mutations: {
    jian(state){
      state.n=state.n-1
    },
    add(state){
      state.n=state.n+1
    },
    bian(state){
      state.falg=!state.falg
    }
  },
  actions: {

  }
})
