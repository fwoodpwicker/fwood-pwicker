<template>
  <div>
    Input a place/category: <input v-model= 'inputPick' type='text'>
    <button @click='addPick'>Add</button>
  </div>
</template>
<script>
import { EventBus } from '../main.js'

export default {
  data () {
    return {
      inputPick: ''
    }
  },
  methods: {
    addPick () {
      // check number of picks player has left
      EventBus.$emit('add-pick', this.inputPick)
    }
  }
}
</script>
