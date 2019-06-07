<template>
  <div class='page'>
    <h1> 404 Page Not Found </h1>
    <p> Nothing to see here. Take this doge toast for good luck! </p>
    <img src='./../assets/404-toast.jpg' />
  </div>
</template>

<style scoped>
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
    padding: 50px;
    box-sizing: border-box;
    overflow: hidden;
  }

  h1 {
    font-size: 40px;
  }

  p {
    padding: 20px;
  }

  img {
    width: 500px;
    max-width: 95vw;
    border: 1px solid #222;
    box-sizing: border-box;
  }
</style>
