<template>
  <div id="app">
    <Header />
    <div class="main-comp">
    <MapVisual />
    <Events v-bind:myEvents = "events" />
    </div>
    <Footer />
  </div>
</template>



<script>
import Header from './Header'
import Footer from './Footer'
import MapVisual from './MapVisual'
import Events from './Events'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
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
    console.log("Heres our fetch crap from database: ",this.events)
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
