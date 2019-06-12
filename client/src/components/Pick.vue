<template>
  <div>
    <AddPick />
    <DisplayPicks />
    <br/>
  </div>
</template>
<script>
import { playerChoiceStore } from '../store/player-choices.js'
import DisplayPicks from './Pick-DisplayPicks.vue'
import AddPick from './Pick-AddPick.vue'

export default {
  components: {
    DisplayPicks,
    AddPick
  },
  data () {
    return {
      currPlayer: 0
    }
  },
  methods: {
    getUsersName () {
      const players = Object.keys(playerChoiceStore.state)
      const player = players[this.currPlayer]
      const playerInStore = playerChoiceStore.state[player]

      return playerInStore.name
    }
  }
}
</script>
