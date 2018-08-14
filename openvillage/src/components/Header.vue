<template>
  <header>
    <img src="https://villageidiotblog.files.wordpress.com/2013/08/villageidiot_sign.jpg" alt="placeholder">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <a href="#">Login</a>
    </nav>
  </header>

</template>


<script>
  export default {
    name: 'Header'
  }
</script>


<style scoped>
  header {
    display: flex;
    box-sizing:border-box;
    justify-content: space-between;
    background-color: beige;
    width: 100%;
    padding: 0 10vw;
  }
  a {
    padding:.5vw;
  }
  img {
    height: 8vw;
    padding: 2vw;
  }
</style>
