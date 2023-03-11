<template>
  <div>

    <h1>果咩纳塞~我是子组件...😅😅😅</h1>
    <h1>{{anime.name}}-{{anime.c1}}</h1>
    <h1>我是子组件,点击下方按钮触发子传父信息...</h1>
    <button @click="transferInfo">快点我!!🎃</button>
  </div>
</template>

<script>
export default {
  name: "Son1001",
  data(){
    return {
        'name':'雪之下雪乃-yukino-冰雪女王...',
    }
  },
  props:['anime','infoFromSon'],
  methods:{
    transferInfo(){
      this.infoFromSon(this.name)
    }
  }
}
</script>

<style scoped>

</style>
