<template>
  <div>
    <div id="numChoice">
      {{ choice }}: {{ numChoice }}
    </div>
    <div id="increment" v-on:click="increment">
      Increase
    </div>
    <br/>
    <div id="decrement" v-on:click="decrement">
      Decrease
    </div>
  </div>
</template>

<script>
import { settingsStore } from '../store/settings.js'
import { playerChoiceStore } from '../store/player-choices.js'
import { EventBus } from '../main.js'

export default {
  props: [ 'choice', 'cost' ],
  data () {
    return {
      currUser: '',
      userStore: '',
      numChoice: 0,
      totalTokens: settingsStore.getters.totalTokens,
      currTokens: 0,
      choiceCost: this.cost
    }
  },
  mounted () {
    EventBus.$on('get-curr-user', (user) => {
      this.currUser = user
      this.userStore = playerChoiceStore.state[this.currUser]
      this.currTokens = this.userStore.tokensLeft
    })
  },
  methods: {
    increment () {
      if (this.currTokens - this.choiceCost >= 0) {
        this.updatePickOrBan(1)
      }
    },
    decrement () {
      if (this.currTokens + this.choiceCost <= this.totalTokens && this.numChoice - 1 >= 0) {
        this.updatePickOrBan(-1)
      }
    },
    updateChoice () {
      EventBus.$emit('update-choice')
    },
    updatePickOrBan (factor) {
      if (this.choice === 'pick') {
        this.numChoice = this.userStore.picks + (factor * 1)
        playerChoiceStore.commit(this.currUser + '/setPicks', this.userStore.picks + (factor * 1))
      } else {
        this.numChoice = this.userStore.bans + (factor * 1)
        playerChoiceStore.commit(this.currUser + '/setBans', this.userStore.bans + (factor * 1))
      }
      playerChoiceStore.commit(this.currUser + '/setTokensLeft', this.userStore.tokensLeft + (factor * -1 * this.choiceCost))
      this.updateChoice()
    }
  }
}
</script>
