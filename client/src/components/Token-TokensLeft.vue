<template>
  <div>
    Tokens Left: {{ tokens }}
  </div>
</template>

<script>
import { settings } from '../store/settings.js'
import { EventBus } from '../main.js'

export default {
  data () {
    return {
      tokens: settings.getters.totalTokens
    }
  },
  mounted () {
    EventBus.$on('increment', cost => this.tokens -= cost )
    EventBus.$on('decrement', cost => this.tokens += cost )
  }
}
</script>
