<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="8"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 39.7392, lng: -104.9903 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  props: ["myEvents"],

  mounted() {
    this.geolocate();
    this.createMarkersPerEvent(this.myEvents)
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        console.log("clicked add, print markers",this.markers[0])
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    createMarkersPerEvent(events) {
      console.log('i am mappinggggg', events)
      events.map(event => {
        let positionObject = {}
        positionObject.position = {}
        positionObject.position.lat = event.lat
        positionObject.position.lng = event.long
        return this.markers.push(positionObject)
      })
      console.log(this.markers)
    }
  }
};
</script>
