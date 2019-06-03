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
    EventBus.$on('increment', (cost) => {
      this.tokens -= cost
      EventBus.$emit('tokens-left', this.tokens)
    })

    EventBus.$on('decrement', (cost) => {
      this.tokens += cost
      EventBus.$emit('tokens-left', this.tokens)
    })
  }
}
</script>
