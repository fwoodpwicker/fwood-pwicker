<template>
  <div>
    Input a place/category: <input v-model= 'inputPick' type='text'>
    <button @click='addPick'>Add</button>
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
      console.log(this.picks)
    }
  }
}
</script>
