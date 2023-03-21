<template>
  <div>
    <h1>通过pubsub接受来自pubsub的信息::{{info}}</h1>
    <hr>
    <PubSub/>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import PubSub from "@/components/pubsub/PubSub";
export default {
  name: "Anime1001",
  components:{
    PubSub
  },
  data(){
    return {
      info:'你好!!😁😁'
    }
  },
  methods:{
    infoFromPS(data){
      this.info = data
    }
  },
  mounted() {
    this.pid = pubsub.subscribe('info',this.infoFromPS)
  },
  beforeDestroy() {
    pubsub.unsubscribe('info')
  }
}
</script>

<style scoped>

</style>
