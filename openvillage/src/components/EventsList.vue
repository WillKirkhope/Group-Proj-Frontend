<template>
  <li>
    <h2>{{event.name}}</h2>
    <p>{{event.description}}</p>
    <div class="moreButton">
      <button>See More</button>
    </div>
  </li>
</template>


<script>
export default {
  name: "EventsList",
  props: ["event"]
}
</script>


<style scoped>


li {
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 1vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 1vw;
    padding: .5vw .5vw;
    /* cursor: pointer; */
    border-radius: .25vw;
    border: 1px solid black;
    box-shadow: .06vw .06vw .06vw 0vw rgba(0,0,0,0.75);
}

h2 {
  font-size: 1.5vw;
  margin-bottom: 0;
}

p {
  font-size: 1vw;
}

.moreButton {
  display: flex;
  justify-content: flex-end;
  margin-right: 2vw;
}

button {
  background-color:rgb(104, 191, 237);
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 1vw;
  font-weight: 400;
  margin: 0;
  margin-bottom: 1vw;
  padding: .5vw .5vw;
  /* cursor: pointer; */
  border-radius: .25vw;
  border: 1px solid black;
  box-shadow: .25vw .25vw .125vw 0vw rgba(0,0,0,0.75);
}



</style>