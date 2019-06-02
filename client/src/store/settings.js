import VueX from 'vuex'

export const settings = new VueX.Store({
  state: {
    numPlayers: 0
  },
  mutations: {
    setNumPlayers (state, num) {
      state.numPlayers = num
    }
  },
  getters: {
    numPlayers: state => state.numPlayers
  }
})
