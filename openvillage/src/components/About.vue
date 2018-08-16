<template>
  <div id="about">
      <h1>About Open Village</h1>
      <p>Open Village is an application created by Village Idiots Inc. that makes the process of helping your local community easy. Our app allows you to find a community service event near you and read all about the event. Want to gather your community and help others? You can create your own community service event and have it seen by all other members. With Open Village, community service is more efficient than ever before.</p>
        <h2>Our Team</h2>
        <ul>
          <Members v-for = "member in members" :key="member.id" :member = "member"/>
          <img src="https://vethouse.com.ua/wp-content/uploads/PUGINBLANKET-2030_grande.jpg" alt="">
        </ul>

  </div>
</template>


<script>
import Members from "./Members"
export default {
  name: 'About',
  components: {
    Members
  },
  data(){
    return {
      members: []
    }
  },
  methods: {
  getMembers() {
    fetch("https://openvillage.herokuapp.com/neighbors")
    .then(response => response.json())
    .then(myData => this.members = (myData.event))
    }
  },
  mounted(){
    this.getMembers()
  }
}
</script>


<style>

h2 {
  padding-left: 2vw;
  font-size:3vw;
}

img {
height:25vh;
width: 21vw;
padding-right:2vw;
}

p {
  padding-left:2vw;
}

#about h1 {
  padding-left:2vw;
}




</style>
