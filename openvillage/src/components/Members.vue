<template>
    <li>
        <p id = "member-name">{{member.firstname}} {{member.lastname}}</p>
        <img :src="`${member.image}`" id = "member-image" alt="">
    </li>


</template>




<script>
export default {
    name:"Members",
    props: ["member"]
}







</script>





<style scoped>

li {
    list-style-type: none;
}

#member-image {
height:25vh;
width: 21vw;
margin-left: 3vw;
padding-right:2vw;
}

#member-name {
font-size: 2.5vw;
margin-left: 3.5vw;
list-style-type:none;
}






</style>
