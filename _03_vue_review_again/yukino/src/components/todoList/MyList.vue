<template>
  <div>
    <MyItem :animeList="animeList" />
  </div>
</template>

<script>
import MyItem from "@/components/todoList/MyItem";

export default {
  name: "MyList",
  props:['animeList'],
  components:{
    MyItem
  }
}
</script>

<style scoped>

</style>
