<template>
  <div>
    <span v-for="i in names" v-bind:key="i">
      <span>{{i}}</span> <img @click='updateName' height=15 width=15 src='../../public/edit-icon.png'>
      <br/>
    </span>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      names: [],
      edit: false
    }
  },
  methods: {
    updatePlayers () {
      this.names = []
      for (let i = 1; i <= this.value; i++) {
        this.names.push('Player ' + i)
      }
    },
    updateName () {
      console.log('updating')
    }
  },
  watch: {
    value: function () {
      this.updatePlayers()
    }
  },
  mounted () {
    // for default players (on page load)
    this.updatePlayers()
  }
}
</script>
