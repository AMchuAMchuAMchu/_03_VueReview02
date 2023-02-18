<template>
  <div>
    <h4>{{title}}</h4>
    <ul>
      <li v-for="(item,index) in animeList" :key="index">{{item}}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Anime",
  'props':['title','animeList']
}
</script>

<style scoped>
div{
  float: left;
  background-color: aqua;
  margin-left: 50px;
}
</style>
