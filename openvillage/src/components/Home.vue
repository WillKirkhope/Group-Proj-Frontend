<template>
  <div id="app">
    <div class="main-comp">
      <GoogleMap v-if='this.events' v-bind:myEvents="events"/>
      <Events v-bind:myEvents="events" />
    </div>
  </div>
</template>


<script>
import Events from './Events'
import GoogleMap from './GoogleMap'

export default {
  name: 'App',
  components: {
    GoogleMap,
    Events
  },
  data(){
    return {
      events: null
    }
  },
  methods: {
    getData(){
      fetch('https://openvillage.herokuapp.com/events')
        .then(response => response.json())
        .then(myData => this.events = myData.event)
    }
  },
  mounted() {
    this.getData()
  }
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
