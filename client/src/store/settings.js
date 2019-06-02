import VueX from 'vuex'
import Vue from 'vue'
Vue.use(VueX)

export const settings = new VueX.Store({
  state: {
    numPlayers: 0,
    numTokens: 0
  },
  mutations: {
    setNumPlayers (state, num) { state.numPlayers = num },
    setNumTokens (state, num) { state.numTokens = num }
  },
  getters: {
    numPlayers: state => state.numPlayers,
    numTokens: state => state.numTokens
  }
})
