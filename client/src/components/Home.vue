<template>
  <div id ='home'>
    <Hero />
    <router-link to='/settings'>Single Device</router-link>
  </div>
</template>

<script>
import Hero from './Home-Hero.vue'
export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>
