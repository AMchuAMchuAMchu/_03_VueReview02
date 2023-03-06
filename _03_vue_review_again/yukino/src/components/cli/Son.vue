<template>
  <div>
    <h1>I'm your son...</h1>
    <h2>I get info from my father :{{queue.name}}-{{queue.age}}</h2>
  </div>
</template>

<script>
export default {
  name: "Son",
  props:['queue'],

}
</script>

<style scoped>

</style>
