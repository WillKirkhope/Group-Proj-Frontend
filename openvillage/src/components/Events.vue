<template>
  <div class = "event">
    <ul class="list">
      <EventsList v-for = "oneEvent in myEvents" :key = "oneEvent.id" v-bind:event = "oneEvent"/>
      
    </ul>
    <button type="button" name="button">Create</button>
  </div>
</template>


<script>
import EventsList from "./EventsList"
export default {
  name: 'Events',
  props: ["myEvents"],
  components: {
    EventsList
  }
}

</script>


<style>

.event {
  display:flex;
  align-items:center;
  flex-direction:column;
  padding: 3vw 0;
}

.list {
  width: 40vw;
}

button {
  font-family: monospace;
  height: 4vw;
  width: 25vw;
  border-radius: 5px;
}

</style>
