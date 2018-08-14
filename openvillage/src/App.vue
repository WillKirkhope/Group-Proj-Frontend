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
import Header from './components/Header'
import Footer from './components/Footer'
import MapVisual from './components/MapVisual'
import Events from './components/Events'


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
      fetch()
        .then(response => response.json())
        .then(myData => this.events = myData )
    }
  }
}
</script>



<style>

.main-comp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>
