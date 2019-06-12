<template>
  <div>
    <h1>{{ getUsersName }}</h1>
    <TokensLeft/>
    <TokenChoices :cost='pickCost' choice='pick'/>
    <br/>
    <TokenChoices :cost='banCost' choice='ban'/>

    <button v-if='currPlayer' @click='previousPlayer'>Previous</button>
    <button @click='nextPlayer'>Next</button>
  </div>
</template>

<script>
import TokensLeft from './Token-TokensLeft.vue'
import TokenChoices from './Token-Choices.vue'
import { playerChoiceStore } from '../store/player-choices.js'
import { EventBus } from '../main.js'

export default {
  data () {
    return {
      pickCost: 1,
      banCost: 1,
      currPlayer: 0
    }
  },
  components: {
    TokensLeft,
    TokenChoices
  },
  computed: {
    getUsersName () {
      const players = Object.keys(playerChoiceStore.state)
      const player = players[this.currPlayer]
      const playerInStore = playerChoiceStore.state[player]

      return playerInStore.name
    }
    // // adjust pick/ban costs here
    // choiceCostCalculation: function () {

    // }
  },
  methods: {
    previousPlayer () {
      this.currPlayer--
      this.updateCurrPlayer()
    },
    nextPlayer () {
      if (this.currPlayer !== Object.keys(playerChoiceStore.state).length - 1) {
        this.currPlayer++
        this.updateCurrPlayer()
      } else {
        this.$router.push('/pick')
      }
    },
    updateCurrPlayer () {
      EventBus.$emit('get-curr-user', Object.keys(playerChoiceStore.state)[this.currPlayer])
    }
  },
  mounted () {
    this.updateCurrPlayer()
  }
}
</script>
