<template>
  <div>
    <input
    type='number'
    min='1' max='6'
    name='num_players'
    v-model='numPlayers'/>

    <DisplayNames ref='players' v-model='numPlayers'/>
    <br/>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import { settingsStore } from '../store/settings.js'
import { playerChoiceStore } from '../store/player-choices.js'
import DisplayNames from './Settings-DisplayNames.vue'
import uuid from 'uuid/v4'

export default {
  data () {
    return {
      numPlayers: 2
    }
  },
  components: {
    DisplayNames
  },
  methods: {
    submit () {
      settingsStore.commit('setNumPlayers', this.numPlayers)

      // register all players when number has been set
      this.$refs.players.names.forEach((player) => {
        const playerRegistration = {
          namespaced: true,
          state: {
            name: player.name,
            picks: 0,
            bans: 0,
            tokensLeft: settingsStore.getters.totalTokens
          },
          mutations: {
            setPicks (state, picks) {
              state.picks = picks
            },
            setBans (state, bans) {
              state.bans = bans
            },
            setTokensLeft (state, tokensLeft) {
              state.tokensLeft = tokensLeft
            }
          }
        }
        playerChoiceStore.registerModule(uuid(), playerRegistration)
      })
      this.$router.push('/tokens')
    }
  }
}
</script>
