<template>
  <div class="eventPage">
  <div class="Event-by">
    <EventCard v-if='this.event' v-bind:myEvents="event" />
  </div>
  </div>
</template>

<script>
import EventCard from "./EventCard"


export default {
    name: 'EventById',
    components: {
      EventCard
    },
    data() {
        return {
            event: null,
            event_id: null
        }
    },
    methods: {
        getEventData() {
            fetch(`https://openvillage.herokuapp.com/events/${this.event_id}`)
                .then(response => response.json())
                .then(myData => this.event = myData.event)
                .then(() => console.log(this.event[0]))
        },
        getQueryString() {
            let locationName = location.href
            console.log(locationName.split('/'))
            this.event_id = (locationName.split('/')[5])
        }
    },
    mounted() {
        this.getQueryString()
        this.getEventData()
    }

}

</script>

<style>

.eventPage {
  background-color: rgb(228, 230, 234);
  padding: 6vw;
}

</style>
