<template>
  <div class='hero'>
    <img src='./../assets/hero.jpeg' />
    <h1 class='title'> Fwood Pwicker </h1>
    <router-link to='/settings' class='single-cta'>Single Player Mode</router-link>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
  .hero {
    display: inline-block;
    position: relative;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100vh;
    background-color: transparent;
    flex-direction: column;
  }

  img {
    position: absolute;
    z-index: -1;
  }

  .title {
    display: block;
    color: white;
    font-size: 80px;
    text-shadow: 2px 2px orange;
    margin-left: 180px;
  }

  .single-cta {
    display: block;
    color: #3030ced0;
    background-color: white;
    border: 1px solid #3030ced0;
    border-radius: 20px;
    padding: 10px 50px;
    text-decoration: none;
    margin-left: 150px;
    margin-top: 50px;
  }
  .single-cta:hover {
    color: blue;
    border-color: blue;
  }

  @media (max-width: 768px) {
    .title, .single-cta {
      margin-left: 0;
    }

    .title {
      line-height: 1
    }
  }
</style>
