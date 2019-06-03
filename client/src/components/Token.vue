<template>
  <div>
    <TokensLeft/>
    <TokenPicks/>
  </div>
</template>

<script>
import TokenPicks from './Token-Picks.vue'
import TokensLeft from './Token-TokensLeft.vue'

export default {
  components: {
    TokenPicks,
    TokensLeft
  }
}
</script>
