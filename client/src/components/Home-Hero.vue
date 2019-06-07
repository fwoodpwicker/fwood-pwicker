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
    font-size: 90px;
    text-shadow:
      -1px -1px 0 rgb(145, 96, 6),
      1px -1px 0 rgb(145, 96, 6),
      -1px 1px 0 rgb(145, 96, 6),
      1px 1px 0 rgb(145, 96, 6);
    line-height: 1;
    font-weight: bold;
  }

  .single-cta {
    display: block;
    color: #1616bed0;
    background-color: white;
    border: 2px solid #1616bed0;
    border-radius: 20px;
    padding: 10px 50px;
    text-decoration: none;
    /* margin-left: 150px; */
    margin-top: 50px;
    font-weight: bold;
  }
  .single-cta:hover {
    color: blue;
    border-color: blue;
  }

  @media (max-width: 768px) {
    .title, .single-cta {
      margin-left: 0;
    }
  }
</style>
