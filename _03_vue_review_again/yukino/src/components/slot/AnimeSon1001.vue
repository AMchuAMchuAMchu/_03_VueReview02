<template>
   <div>
     <ul>
       <li v-for="item in animeList" :key="item.id">{{item.name}}</li>
     </ul>
     <slot></slot>
   </div>
</template>

<script>
export default {
  name: "AnimeSon1001",
  props:['animeList']
}
</script>

<style scoped>

</style>
