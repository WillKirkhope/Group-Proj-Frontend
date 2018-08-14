<template>
  <div id="app">
    <Header />
    <Dummy />
    <Footer />
  </div>
</template>



<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Dummy from './components/Dummy'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Dummy
  }
}
</script>



<style>

</style>
