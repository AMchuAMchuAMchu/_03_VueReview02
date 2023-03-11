<template>
  <div>
    <input id="keyword" type="text" name="anime_name" placeholder="请输入您的用户名称😅😅,输入完毕之后按下回车^_^">
    <ul class="item_ul">
      <li v-for="item in animeList_item" @click="forCheckbox(item.id)" :key="item.id">
        &emsp;<input type="checkbox" :checked="item.isDone" id="select_item" name="anime">
          &nbsp;{{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ['animeList'],
  data(){
    return {
      'animeList_item':this.animeList
    }
  },
  methods:{
    forCheckbox(id){
      this.animeList_item.forEach(p=>{
        if (p.id === id){
          p.isDone = !p.isDone
        }
      })
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.item_ul {
  margin-top: 10px;
  list-style: none;
}

li {
  margin: -2px auto;
  width: 95%;
  height: 40px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border-collapse: collapse;
  line-height: 40px;
}

#keyword {
  display: block;
  margin: 14px auto;
  width: 95%;
  height: 30px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}
</style>
