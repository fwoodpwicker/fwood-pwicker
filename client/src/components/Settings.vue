<template>
  <div>
    <input
    type='number'
    min='1' max='6'
    name='num_players'
    v-model='numPlayers'/>

    <DisplayNames ref='names' v-model='numPlayers'/>
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
      for (let i of this.$refs.names.names) {
        let playerRegistration = {
          state: {
            name: i.name,
            picks: 0,
            bans: 0
          }
        }
        playerChoiceStore.registerModule(uuid(), playerRegistration)
      }
      // this.$router.push({ name: 'pick', params: { decisionsMade: settingsStore.getters.numPlayers } })
    }
  }
}
</script>
