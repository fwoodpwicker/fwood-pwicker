<template>
  <div>
    Tokens Left: {{ tokens }}
  </div>
</template>

<script>
import { playerChoiceStore } from '../store/player-choices.js'
import { EventBus } from '../main.js'

export default {
  data () {
    return {
      tokens: 0,
      currUser: ''
    }
  },
  mounted () {
    EventBus.$on('get-curr-user', (user) => { this.currUser = user; this.updateTokenCount() })
    EventBus.$on('update-choice', () => { console.log('updated tokens'); this.updateTokenCount() })
  },
  methods: {
    updateTokenCount () {
      // this.$set(this.tokens, playerChoiceStore.state[this.currUser].tokensLeft)
      this.tokens = playerChoiceStore.state[this.currUser].tokensLeft
    }
  }
}
</script>
