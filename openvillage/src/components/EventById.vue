<template>
    <h1>This is the Event Page!</h1>

</template>

<script>


export default {
    name: 'EventById',
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

</style>