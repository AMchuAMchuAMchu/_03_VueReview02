<template>
  <div class="anime_footer">
    <input type="checkbox" :checked="count===4" name="anime_done">
    <span>
    &emsp;已完成{{count}}/全部{{animeList.length}}
    </span>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['animeList'],
  data(){
    return {
      count:0,
      animeList_f:this.animeList
    }
  },
  watch:{
    animeList_f:{
      deep:true,
      immediate:true,
      handler(newValue,oldValue){
        this.count = 0
        this.animeList_f.forEach(a=>{
          if (a.isDone){
            this.count += 1
          }
        })
      }
    }
  },
}
</script>

<style scoped>
.anime_footer {
  top: 450px;
  position: absolute;
  width: 100%;
  height: 30px;
  margin-left: 25px;
}
</style>
