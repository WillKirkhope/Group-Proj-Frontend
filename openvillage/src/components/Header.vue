<template>
  <header class="header">
    <img id="logo-img" src="https://villageidiotblog.files.wordpress.com/2013/08/villageidiot_sign.jpg" alt="placeholder">
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- THIS IS NOT A LOGIN LINK -->
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

  .header {
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10vw;
    background-color: beige;
  }

  .nav-links a {
    padding: .5vw;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  #logo-img {
    height: 7vw;
    padding: 2vw;
  }
  
</style>
