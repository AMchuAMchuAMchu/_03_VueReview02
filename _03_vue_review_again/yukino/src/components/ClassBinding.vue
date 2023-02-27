<template>
  <div>
<!--    <div :class="mood">盒子01</div>-->
<!--    <div :class="classArr">盒子01</div>-->
    <div :class="classObj">盒子01</div>
  </div>
</template>

<script>
export default {
  name: "ClassBinding",
  data(){
    return {
      'mood':'normal',
      'classArr':['normal','p01'],
      'classObj':{
        'normal':true,
        'p01':true
      }
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
</style>
