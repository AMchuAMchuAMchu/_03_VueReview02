<template>
  <div>
    <h1>AnimeList列表....</h1>
    <AnimeSon1001 :animeList="animeList">
      <img src="../../../static/ClariS1001.jpg" alt="找不到哦...">
    </AnimeSon1001>
  </div>
</template>

<script>
import AnimeSon1001 from "@/components/slot/AnimeSon1001";
export default {
  name: "Anime",
  components:{
    AnimeSon1001
  },
  data(){
    return {
      'animeList':[
        {'id':1001,'name':'罪恶王冠'},
        {'id':1002,'name':'心理测量者'},
        {'id':1003,'name':'甲铁城的卡巴内瑞'},
      ]
    }
  }

}
</script>

<style scoped>

</style>
