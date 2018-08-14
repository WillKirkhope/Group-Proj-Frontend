<template>
  <header>
    <img src="https://villageidiotblog.files.wordpress.com/2013/08/villageidiot_sign.jpg" alt="placeholder">
    <nav>
      <a href="#">Home</a>
      <a href="#">Events</a>
      <a href="#">About</a>
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
    justify-content: space-between;
    background-color: beige;
    height: 20vw;
    width: 100vw;
  }
  img {
    width: 40vw;
    height: auto;
  }
</style>
