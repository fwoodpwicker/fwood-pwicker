<template>
  <div>
    <div id="numPicks">
      Picks: {{ numPicks }}
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
import { settings } from '../store/settings.js'
import { EventBus } from '../main.js'

export default {
  data () {
    return {
      numPicks: 0,
      pickCost: 1,
      totalTokens: settings.getters.totalTokens,
      currTokens: settings.getters.totalTokens
    }
  },
  mounted () {
    EventBus.$on('tokens-left', (tokens) => { this.currTokens = tokens })
  },
  methods: {
    increment () {
      if (this.currTokens - this.pickCost >= 0) {
        EventBus.$emit('increment', this.pickCost)
        this.numPicks++
      }
    },
    decrement () {
      if (this.currTokens + this.pickCost <= this.totalTokens) {
        EventBus.$emit('decrement', this.pickCost)
        this.numPicks--
      }
    }
  }
}
</script>
