<template>
  <div>
    <input id="keyword" type="text" @keydown.enter="searchAnime" v-model:name="anime_name" placeholder="请输入您的用户名称😅😅,输入完毕之后按下回车^_^">
  </div>
</template>

<script>
export default {
  name: "MySearch",
  data(){
    return {
      anime_name:''
    }
  },
  methods:{
    // 添加anime
    searchAnime(){
      this.$bus.$emit('searchAnime',this.anime_name)
      // 重置
      this.anime_name = ''
    }
  }
}
</script>

<style scoped>
#keyword {
  display: block;
  margin: 14px auto;
  width: 95%;
  height: 30px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}
</style>
