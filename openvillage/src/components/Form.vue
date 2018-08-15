<template>
  <div id="form">
    <form>
      <label htmlFor="name">Organizer</label>
      <input type="text" name="name" />
      <label htmlFor="Event Name">Event Name</label>
      <input type="text" name="Event Name" />
      <label htmlFor="Latitude">Latitude</label>
      <input type="integer" name="Latitude" />
      <label htmlFor="Longitude">Longitude</label>
      <input type= "integer" name="Longitude" />
      <label htmlFor="Description">Description</label>
      <input type="text" name="Description" />
      <input type="submit" name="submit" value="Submit" />
    </form>
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
