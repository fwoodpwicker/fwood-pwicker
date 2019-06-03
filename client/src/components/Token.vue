<template>
  <div>
    <TokensLeft/>
    <TokenChoices :cost=1 choice='pick'/>
    <TokenChoices :cost=1 choice='ban'/>
  </div>
</template>

<script>
import TokensLeft from './Token-TokensLeft.vue'
import TokenChoices from './Token-Choices.vue'

export default {
  components: {
    TokensLeft,
    TokenChoices
  }
}
</script>
