<template>
  <div id="form">
      <h1></h1>
  </div>
</template>


<script>
export default {
  name: 'Form',
  components: {
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
  },
  mounted: function () {
    this.testFunction()
  }
}
</script>


<style>

</style>
