<template>
  <div>
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
  props: ['decisionsMade'],
  data () {
    return {
      pickCost: 1,
      banCost: 1,
      currPlayer: 0,
      numPicks: 0,
      numBans: 0
    }
  },
  components: {
    TokensLeft,
    TokenChoices
  },
  computed: {
    getCurrUser: function () {
      return Object.keys(playerChoiceStore.state)[this.currPlayer]
    }
    // // adjust num tokens given to each player
    // totalTokenCalculation: function () {

    //   // change 10
    //   // settings.commit('setTotalTokens', 10)
    // },
    // // adjust pick/ban costs here
    // choiceCostCalculation: function () {

    // }
  },
  methods: {
    previousPlayer () {
      this.$set(this.currPlayer, this.currPlayer - 1)
      this.emitCurrPlayer()
    },
    nextPlayer () {
      if (this.currPlayer !== Object.keys(playerChoiceStore.state).length - 1) {
        this.$set(this.currPlayer, this.currPlayer + 1)
        this.emitCurrPlayer()
      } else {
        console.log('go to pick page')
      }
    },
    emitCurrPlayer () {
      console.log(Object.keys(playerChoiceStore.state)[this.currPlayer])
      EventBus.$emit('get-curr-user', Object.keys(playerChoiceStore.state)[this.currPlayer])
    }
  },
  mounted () {
    // this.totalTokenCalculation()
    this.emitCurrPlayer()
    // get number of picks/bans from components from Token total-tokens component
    EventBus.$on('numPicks', (picks) => { this.numPicks = picks })
    EventBus.$on('numBans', (bans) => { this.numBans = bans })
  }
}
</script>
