<template>
  <header class="header">
    <img id="logo-img" src="../assets/group-project-logo.png" alt="placeholder">
    <h1 class = "header-title">Open Village</h1>
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
    background-color: #ffb400;
    padding-top:5px;
    color: rgb(5,89,135);
  }

  .nav-links a {
    padding: .5vw;
    color: rgb(5,89,135);
    text-decoration:none;
  }

  #logo-img {
    height: 8vw;
    width:auto;
  }
  
  .header-title {
    font-size: 40px;
    padding-right:45%;
  }
</style>
