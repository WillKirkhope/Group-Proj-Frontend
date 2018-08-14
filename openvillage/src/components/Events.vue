<template>
  <div class="list">
    <ul>
      <li>Picking up Dog Shit</li>
      <li>Picking up Cat Shit</li>
      <li>Trash Clean up</li>
      <li>Park Clean up</li>
      <li>Feeding Homeless</li>
    </ul>
    <button type="button" name="button">Create</button>
  </div>
</template>


<script>

export default {
  name: 'Events',
  props: ["myEvents"]
}

</script>


<style>

button {
  font-family: monospace;
  height: 4vw;
  width: 4vw;
  border-radius: 25%;
}

</style>
