import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numero1: 0,
    numero2: 0
  },
  getters:{
    soma (state) {
      return state.numero1 * 1 + state.numero2 * 1
    },
    subtracao (state) {
      return state.numero1 -state.numero2
    },
    multiplicacao: state => {
      return state.numero1 * state.numero2
    }
  },
  mutations: {
    setNumero1 (state, valor) {
      state.numero1 = valor
    },
    setNumero2 (state, valor) {
      state.numero2 = valor
    }
  },
  actions: {
    setNumero2Delay (context, valor){
      setTimeout(() => {
        context.commit('setNumero2', valor)
      }, 1000)
    }
  }
})
