<template>
  <li>
    <h2>{{event.name}}</h2>
    <p>{{event.description}}</p>
  </li>
</template>


<script>
export default {
  name: "EventsList",
  props: ["event"]
}
</script>


<style scoped>

* {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

h2 {
  font-size: 1.5vw;
}

p {
  font-size: 1vw;
}

</style>