<template>
<div class = "form-container">
    <form id = "form">
      <div class = "form-div">
      <label htmlFor="name">Organizer</label>
      <input type="text" name="name" />
      </div>
      <div class = "form-div">
      <label htmlFor="Event Name">Event Name</label>
      <input type="text" name="Event Name" />
      </div>
      <div class = "form-div">
      <label htmlFor="Latitude">Latitude</label>
      <input type="integer" name="Latitude" />
      </div>
      <div class = "form-div">
      <label htmlFor="Longitude">Longitude</label>
      <input type= "integer" name="Longitude" />
      </div>
      <div class = "form-div">
      <label htmlFor="Description">Description</label>
      <textarea type="text" name="Description" ></textarea>
      </div>
      <input id = "submit-button" type="submit" name="submit" value="Submit" />
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
 
 #form {
   display:flex;
   flex-direction:column;
   padding:50px;
   width:40vw;
   align-items:center;
 }

 .form-div {
   padding:20px;
 }

 input {
  width: 40vw;
 }

 textarea {
   width: 40vw;
 }

 .form-container {
   display:flex;
   justify-content:center;
   background-color: rgb(228, 230, 234);

 }

 #submit-button {
   padding: 1vw;
   width: 20vw;
 }







</style>
