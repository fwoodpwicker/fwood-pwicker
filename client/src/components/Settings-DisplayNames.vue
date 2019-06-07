<template>
  <div @click='exitEditing()'>
    <span v-for="i in names" v-bind:key="i">
      <span v-if='!editing[i]'>{{i}}</span>
      <input v-else type='text' v-model='editName'>
      <img @click='updatingName(i)' height=15 width=15 src='../../public/edit-icon.png'>
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
      editing: {}
    }
  },
  methods: {
    updatePlayers () {
      this.names = []
      this.clearEditing()

      for (let i = 1; i <= this.value; i++) {
        this.names.push('Player ' + i)
        // use $set for reactive change
        this.$set(this.editing, this.names[i - 1], false)
      }
    },
    updatingName (index) {
      this.$set(this.editing, index, true)
    },
    clearEditing () {
      Object.keys(this.editing).forEach(i => delete this.editing[i])
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
