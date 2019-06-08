<template>
  <div>
    <span v-for="(item, index) in names" v-bind:key="index">
      <span v-if='!item.editing'>
        {{item.name}} <img @click='updatingName(index)' height=15 width=15 src='../assets/edit-icon.png'>
      </span>
      <span v-else>
        <input v-model='names[index].name' type='text'><img @click='updatingName(index)' height=15 width=15 src='../assets/exit-icon.jpg'>
      </span>
      <br/>
    </span>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      names: []
    }
  },
  methods: {
    updatePlayers () {
      this.names = []

      for (let i = 1; i <= this.value; i++) {
        this.names.push({ name: 'Player ' + i, editing: false })
      }
    },
    updatingName (index) {
      // use $set for forced reactive change
      this.$set(this.names[index], 'editing', !this.names[index].editing)
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
