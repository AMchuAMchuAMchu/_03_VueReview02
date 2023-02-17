<template>
  <div id="root">
   <Anime :animeList="恋爱" title="恋爱"></Anime>
   <Anime :animeList="冒险" title="冒险">
     <img src="./assets/Psycho-pass.jpg" alt=""/>
   </Anime>
   <Anime :animeList="奇幻情感" title="奇幻情感"></Anime>
  </div>
</template>

<script>


import Anime from "@/components/Anime";
export default {
  name: 'App',
  components: {
    Anime,
  },
  data() {
    return {
        "恋爱":['堀与宫村','我的青春恋爱物语果然有问题','樱花庄的宠物女孩'],
        "冒险":['全职猎人','来自深渊','樱花庄的宠物女孩'],
        "奇幻情感":['罪恶王冠','心理测量者','灼眼的夏娜'],
    }
  },


}
</script>

<style>


</style>
