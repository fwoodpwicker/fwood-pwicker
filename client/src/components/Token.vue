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
    // adjust token costs here
    tokenCalculation: () => {
      this.pickCost = 1
      this.banCost = 1
    }
  }
}
</script>
