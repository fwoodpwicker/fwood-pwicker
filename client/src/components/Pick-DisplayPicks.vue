<template>
  <div>
    <span v-for='(item, index) in picks' v-bind:key='index'>
      {{ item }} <img @click='removePick(index)' width=15 height=15 src='../assets/exit-icon.jpg'>
      <br/>
    </span>
  </div>
</template>
<script>
import { EventBus } from '../main.js'

export default {
  data () {
    return {
      picks: []
    }
  },
  mounted () {
    EventBus.$on('add-pick', (item) => { this.addPick(item) })
  },
  methods: {
    updatePicks () {
      this.picks.forEach((item, index) => {
        this.$set(this.picks, index, this.picks[index])
      })
    },
    removePick (index) {
      this.picks.splice(index, 1)
      this.updatePicks()
    },
    addPick (item) {
      this.picks.push(item)
      this.updatePicks()
    }
  }
}
</script>
