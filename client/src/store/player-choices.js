import VueX from 'vuex'

export const playerChoiceStore = new VueX.Store({
  modules: {
  },
  mutations: {
    add (state, { key, value }) {
      state.players[key] = value
    }
  }
})
