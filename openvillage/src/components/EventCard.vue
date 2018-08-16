<template>
  <div class="Event-card">
  <h1>Organizer: {{this.myEvents[0].organizer}}</h1>
  <h2>Event Name: {{this.myEvents[0].name}}</h2>
  <h3>Event Latitude: {{this.myEvents[0].lat}}</h3>
  <h3>Event Longitude: {{this.myEvents[0].long}}</h3>
  <p>Description: {{this.myEvents[0].description}}</p>
  <button @click="this.deleteEvent" id="delete" type="button" name="button">Delete</button>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ['myEvents'],
  methods: {
    deleteEvent (event) {
  console.log('delete was clicked')
  console.log('target',event.target.id)

  const event_id = event.target.id
  fetch(`https://openvillage.herokuapp.com/events/${this.myEvents[0].id}`, {
    method: 'DELETE'
  })
    // .then(window.location.replace("https://openvillage-8d44b.firebaseapp.com/"))
}
}
}

</script>

<style>

.Event-card {
  display: flex;
  flex-direction: column;
  background-color:rgb(232, 245, 252);
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 1vw;
  height: 30vw;
  width: 30vw;
  /* font-weight: 400;
  margin-top: 10vw;
  margin-bottom: 1vw;
  padding: .5vw .5vw; */
  border-radius: .25vw;
  border: 1px solid black;
  box-shadow: .06vw .06vw .06vw 0vw rgba(0,0,0,0.75);
}

p {
  font-size: 1.5vw;
}

#delete {
  margin-left: 13vw;
  font-size: 0.8vw;
  width: 4vw;
  height: auto;

}

</style>
