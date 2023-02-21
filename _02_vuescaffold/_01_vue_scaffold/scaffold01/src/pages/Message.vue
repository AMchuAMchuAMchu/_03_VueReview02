<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
          path:'/Home/Message/Detail',
          query:{
            id:m.id,
            title:m.title
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
      'messageList':[
        {id:'1001','title':'消息1001-罪恶王冠'},
        {id:'1002','title':'消息1002-心理测量者'},
        {id:'1003','title':'消息1003-斩赤红之瞳'},
      ]
    }
  },
  methods:{
    pushShow(m){
      // if (this.$route.path !== '/Home/Message/Detail') {
        this.$router.push({
          path: '/Home/Message/Detail',
          query: {
            id: m.id,
            title: m.title
          }
        })
      // }
    },
    replaceShow(m){
      // if (this.$route.path !== '/Home/Message/Detail') {
        this.$router.replace({
          path: '/Home/Message/Detail',
          query: {
            id: m.id,
            title: m.title
          }
        })
      // }
    },

  }
}
</script>

<style scoped>

</style>
