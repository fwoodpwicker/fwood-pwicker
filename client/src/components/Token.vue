<template>
  <div>
    <TokensLeft/>
    <TokenChoices :cost='pickCost' choice='pick'/>
    <br/>
    <TokenChoices :cost='banCost' choice='ban'/>
  </div>
</template>

<script>
import TokensLeft from './Token-TokensLeft.vue'
import TokenChoices from './Token-Choices.vue'
import { settings } from '../store/settings.js'
export default {
  data () {
    return {
      pickCost: 1,
      banCost: 1
    }
  },
  components: {
    TokensLeft,
    TokenChoices
  },
  computed: {
    // adjust num tokens given to each player 
    totalTokenCalculation: (cb) => {

      // change 10 
      // settings.commit('setTotalTokens', 10)
    },
    // adjust pick/ban costs here
    choiceCostCalculation: () => {
      
    }
  },
  mounted () {
    this.totalTokenCalculation()
    this.choiceCostCalculation()
  }
}
</script>
