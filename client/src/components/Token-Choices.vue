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
import { settings } from '../store/settings.js'
import { EventBus } from '../main.js'

export default {
  props: [ 'choice', 'cost' ],
  data () {
    return {
      numChoice: 0,
      totalTokens: settings.getters.totalTokens,
      currTokens: settings.getters.totalTokens,
      choiceCost: this.cost
    }
  },
  mounted () {
    EventBus.$on('tokens-left', (tokens) => { this.currTokens = tokens })
  },
  methods: {
    increment () {
      if (this.currTokens - this.choiceCost >= 0) {
        EventBus.$emit('increment', this.choiceCost)
        this.numChoice++
      }
    },
    decrement () {
      if (this.currTokens + this.choiceCost <= this.totalTokens && this.numChoice-1 >= 0) {
        EventBus.$emit('decrement', this.choiceCost)
        this.numChoice--
      }
    }
  }
}
</script>
