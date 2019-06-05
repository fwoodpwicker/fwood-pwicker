<template>
  <div>
    <TokensLeft/>
    <TokenChoices :cost='pickCost' choice='pick'/>
    <br/>
    <TokenChoices :cost='banCost' choice='ban'/>

    <button @click='singleDevice ? singleSubmit : multiSubmit'>Next</button>
  </div>
</template>

<script>
import TokensLeft from './Token-TokensLeft.vue'
import TokenChoices from './Token-Choices.vue'
import { settingsStore } from '../store/settings.js'
import { playerChoiceStore } from '../store/player-choices.js'
import { EventBus } from '../main.js'

export default {
  data () {
    return {
      pickCost: 1,
      banCost: 1,
      numPicks: 0,
      numBans: 0,
      singleDevce: true,
      decisionsMade: settingsStore.getters.numPlayers
    }
  },
  components: {
    TokensLeft,
    TokenChoices
  },
  computed: {
    // adjust num tokens given to each player
    totalTokenCalculation: () => {

      // change 10
      // settings.commit('setTotalTokens', 10)
    },
    // adjust pick/ban costs here
    choiceCostCalculation: () => {

    }
  },
  methods: {
    // for single person
    singleSubmit () {
      // get values form other components x

      // 1. put picks and bans into storage
      // 2. put choices into temporary variable

      // 1- put each person into separate modules
      playerChoiceStore.registerModule()
      console.log('bans', this.numBans)
      console.log('picks', this.numPicks)
    }
  },
  mounted () {
    // this.totalTokenCalculation()

    // get number of picks/bans from components from Token total-tokens component
    EventBus.$on('numPicks', (picks) => { this.numPicks = picks })
    EventBus.$on('numBans', (bans) => { this.numBans = bans })
  }
}
</script>
