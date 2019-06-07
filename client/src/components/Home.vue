<template>
  <div id ='home'>
    <Hero />
    <a class='login' href='#'> Login </a>
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

<style scoped>
  #home {
    overflow-y: hidden;
    height: 100vh;
    width: 100vw;
  }

  .login {
    position: absolute;
    top: 0;
    right: 0;
    margin: 25px;
    color: white;
    font-weight: bold;
    background-color: orange;
    padding: 10px 50px;
    text-decoration: none;
  }
</style>
