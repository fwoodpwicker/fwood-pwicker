<template>
  <div>
    <input
    type='number'
    min='1' max='6'
    name='num_players'
    v-model="numPlayers"/>

    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import { settingsStore } from '../store/settings.js'
export default {
  data () {
    return {
      numPlayers: 2
    }
  },
  methods: {
    submit () {
      settingsStore.commit('setNumPlayers', this.numPlayers)
      this.$router.push('pick')
    }
  }
}
</script>
