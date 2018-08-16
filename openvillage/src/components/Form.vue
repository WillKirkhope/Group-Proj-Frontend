<template>
  <div class = "form-container">
    <form id="form" @submit.prevent="postNewEvent">
      <div class = "form-div">
        <label htmlFor="name">Organizer</label>
        <input type="integer" name="organizer" v-model="formData.organizer" />
      </div>
      <div class = "form-div">
        <label htmlFor="eventName">Event Name</label>
        <input type="text" name="eventName" v-model="formData.name" />
      </div>
      <div class = "form-div">
        <label htmlFor="lat">Latitude</label>
        <input type="integer" name="lat" v-model="formData.lat" />
      </div>
      <div class = "form-div">
        <label htmlFor="long">Longitude</label>
        <input type= "integer" name="long" v-model="formData.long" />
      </div>
      <div class = "form-div">
        <label htmlFor="description">Description</label>
        <textarea type="text" name="description" v-model="formData.description">My event is...</textarea>
      </div>
      <input id="submit-button" type="submit" name="submit" value="Submit" />
    </form>
  </div>
</template>


<script>
export default {
  name: 'Form',
  data(){
    return {
      formData: {
        organizer: '',
        name: '',
        lat: '',
        long: '',
        description: ''
      }
    }
  },
  methods: {
    postNewEvent(){
      fetch('https://openvillage.herokuapp.com/events', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(this.formData)
      })
        // .then(window.location.replace("https://openvillage-8d44b.firebaseapp.com/"))
    }
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
