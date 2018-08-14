<template>
  <div id="form">
    <Header />
      <h1>taco</h1>
    <Footer />
  </div>
</template>



<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Form',
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
