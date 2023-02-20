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
  }
}
</script>

<style scoped>

</style>
