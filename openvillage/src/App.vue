<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>


<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style>

#app {
  font-family: 'Karla', sans-serif;
  font-size:25px;
}

</style>
