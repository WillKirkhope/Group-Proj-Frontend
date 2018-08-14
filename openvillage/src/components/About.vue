<template>
  <div id="about">
    <Header />
      <h1>ABOutTTTTTACO</h1>
    <Footer />
  </div>
</template>



<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'About',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      formData: {}
    }
  },
  methods: {
    testFunction(){
      console.log('hello from methods!')
    }
  }
  // ,
  // mounted: function () {
  //   this.testFunction()
  // }
}
</script>



<style>

.main-comp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
}

</style>
