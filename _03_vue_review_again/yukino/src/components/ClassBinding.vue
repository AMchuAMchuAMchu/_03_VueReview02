<template>
  <div>
<!--    <div :class="mood">盒子01</div>-->
<!--    <div :class="classArr">盒子01</div>-->
<!--    <div :class="classObj">盒子01</div>-->
    <h2 v-show="curiosity%2===0">好奇指数:{{curiosity}}</h2>
<!--    <h2 v-if="curiosity%2===0">好奇指数:{{curiosity}}</h2>-->
    <h3 v-if="curiosity%2===0">雪之下雪乃</h3>
    <h3 v-else-if="curiosity%3===0">由比滨结衣</h3>
    <h3 v-else-if="curiosity%5===0">盛冈森子</h3>
    <h3 v-else>夏娜</h3>
    <button @click="curiosityAdd">增加!</button>

  </div>
</template>

<script>
export default {
  name: "ClassBinding",
  data(){
    return {
      'curiosity':2,
      'mood':'normal',
      'classArr':['normal','p01'],
      'classObj':{
        'normal':true,
        'p01':true
      }
    }
  },
  methods:{
    curiosityAdd(){
      this.curiosity++
    }
  }
}
</script>

<style scoped>
.normal{
  width: 200px;
  height: 200px;
  background-color: aqua;
}
.p01{
  margin: 100px auto;
}
button{
  position: absolute;
  top: 100px;
}

</style>
