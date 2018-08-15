<template>
  <div id="app">
    <div class="main-comp">
      <MapVisual />
      <Events v-bind:myEvents = "events" />
    </div>
  </div>
</template>


<script>
import MapVisual from './MapVisual'
import Events from './Events'

export default {
  name: 'App',
  components: {
    MapVisual,
    Events
  },
  data(){
    return {
      events: []
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
  background-color: rgb(228, 230, 234);
  padding:50px;
}

</style>
