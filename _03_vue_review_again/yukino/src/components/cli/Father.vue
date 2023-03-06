<template>
  <div>
    <h1>I'm your father...</h1>
    <hr>
    <Son :queue="queue" />
    <hr>
    <h3>character01:{{name}}-{{age}}</h3>
    <button @click="showInfo">点击</button>
  </div>
</template>

<script>
import Son from "@/components/cli/Son";
import {hunhe01} from "@/mixin/mixin";

export default {
  name: "Father",
  components: {Son},
  data(){
    return {
      'queue':{
        'name':'yukino',
        'age':17
      }
    }
  },
  mixins:[hunhe01]
}
</script>

<style scoped>

</style>
