<template>
  <div>
    Input a place/category: <input v-model= 'inputPick' type='text'>
    <button @click='addPick'>Add</button>
    <br/>
    <span v-for="(item, index) in picks" v-bind:key="index">
      {{ item }} <img @click='removePick(index)' width=15 height=15 src='../assets/exit-icon.jpg'>
      <br/>
    </span>
  </div>
</template>
<script>
// import { playerChoiceStore } from '../store/player-choices.js'

export default {
  data () {
    return {
      currPlayer: 0,
      inputPick: '',
      picks: []
    }
  },
  methods: {
    addPick () {
      this.picks.push(this.inputPick)
      this.updatePicks()
    },
    updatePicks () {
      for (let i = 0; i < this.picks.length; i++) {
        this.$set(this.picks, i, this.picks[i])
      }
    },
    removePick (index) {
      // remove element by index
    }
    
  }
}
</script>
