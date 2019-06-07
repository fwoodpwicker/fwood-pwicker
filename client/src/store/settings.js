import VueX from 'vuex'
import Vue from 'vue'
Vue.use(VueX)

export const settingsStore = new VueX.Store({
  state: {
    numPlayers: 0,
    totalTokens: 10
  },
  mutations: {
    setNumPlayers (state, num) { state.numPlayers = num },
    setTotalTokens (state, num) { state.totalTokens = num }
  },
  getters: {
    numPlayers: state => state.numPlayers,
    totalTokens: state => state.totalTokens
  }
})
