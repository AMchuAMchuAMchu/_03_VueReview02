<template>
  <div class="todoList">
    <div class="box_in">
      <MySearch/>
      <MyList :animeList="animeList" />
      <MyFooter :animeList="animeList" />
    </div>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

import MySearch from "@/components/todoList/MySearch";

import MyList from "@/components/todoList/MyList";

import MyFooter from "@/components/todoList/MyFooter";

export default {
  name: "MyTodoList",
  data(){
    return {
      'animeList':[
        {'id':1001,'name':'罪恶王冠','isDone':false},
        {'id':1002,'name':'心理测量者','isDone':false},
        {'id':1003,'name':'甲铁城的卡巴内瑞','isDone':false},
        {'id':1004,'name':'创圣的大天使','isDone':false},
      ]
    }
  },
  components: {
    MySearch,
    MyList,
    MyFooter
  },
  methods:{
    checkDone(data){
      this.animeList = data
      // console.log('>>>>>',this.animeList)
    },
    searchAnime(anime){
      var anime_item = {'id':nanoid.id,'name':anime,'isDone':false}
      this.animeList.unshift(anime_item)
    }
  },
  mounted() {
    this.$bus.$on('checkDone',this.checkDone)
    this.$bus.$on('searchAnime',this.searchAnime)
  },
  beforeDestroy() {
    this.$bus.$off('checkDone')
  }

}
</script>

<style scoped>
.todoList {
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.3);
  border: solid 3px rgba(119, 74, 30, 0.4);
  border-radius: 10px;
  width: 600px;
  height: 400px;
  margin: 100px auto;
}
.box_in{
  width: 90%;
  height: 90%;
  margin: 18px auto;
  border: 3px solid rgba(199, 192, 192, 0.5);
  border-radius: 5px;
}
</style>
