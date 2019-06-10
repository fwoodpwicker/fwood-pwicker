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
      currTokens: 0
    }
  },
  mounted () {
    EventBus.$on('get-curr-user', (user) => {
      console.log('changed user')
      this.updateUser(user)
    })

    EventBus.$on('update-choice-count', () => { this.currTokens = this.userStore.tokensLeft })
  },
  methods: {
    updateUser (user) {
      this.currUser = user
      this.userStore = playerChoiceStore.state[this.currUser]
      this.currTokens = this.userStore.tokensLeft
      this.choice === 'pick' ? this.numChoice = this.userStore.picks : this.numChoice = this.userStore.bans
    },
    increment () {
      if (this.currTokens - this.cost >= 0) {
        this.updateChoiceCount(1)
      }
    },
    decrement () {
      if (this.currTokens + this.cost <= this.totalTokens && this.numChoice - 1 >= 0) {
        this.updateChoiceCount(-1)
      }
    },
    updateChoice () {
      EventBus.$emit('update-choice')
    },
    updateChoiceCount (factor) {
      if (this.choice === 'pick') {
        this.numChoice = this.userStore.picks + (factor * 1)
        playerChoiceStore.commit(this.currUser + '/setPicks', this.userStore.picks + (factor * 1))
      } else {
        this.numChoice = this.userStore.bans + (factor * 1)
        playerChoiceStore.commit(this.currUser + '/setBans', this.userStore.bans + (factor * 1))
      }

      playerChoiceStore.commit(this.currUser + '/setTokensLeft', this.userStore.tokensLeft + (factor * -1 * this.cost))
      // to prevent delayed update of currTokens on pick and ban component)
      EventBus.$emit('update-choice-count')
      this.updateChoice()
    }
  }
}
</script>
