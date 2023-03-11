<template>
  <div>
    <h1>我是Father1001组件!!!</h1>
    <hr>
    <Son1001 :anime="anime" :infoFromSon="infoFromSon"/>
    <hr>
    <h1>我是Father1001组件,我收到了来自Son1001的信息?:{{infoSon}}</h1>
  </div>
</template>

<script>

import Son1001 from "@/components/cli/Son1001";
export default {
  name: "Father1001",
  components:{
    Son1001
  },
  methods:{
    infoFromSon(val){
      this.infoSon = val
    }
  },
  data(){
    return {
      'anime':{
        'name':'我的青春恋爱物语果然有问题',
        'c1':'雪之下雪乃-yukino'
      },
      'infoSon':''
    }
  }
}
</script>

<style scoped>

</style>
