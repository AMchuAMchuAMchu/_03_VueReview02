<template>
  <div>
    <form action="#" method="get">
      用户名:<input type="text" name="username" v-model="userInfo.username"><br>
      密码:<input type="password" name="password" v-model="userInfo.password"><br>
      性别:
      男<input type="radio" name="gender" value="male" v-model="userInfo.gender"><br>
      女<input type="radio" name="gender" value="female" v-model="userInfo.gender"><br>
      兴趣:
      听音乐<input type="checkbox" name="hobby" v-model="userInfo.hobby" value="听音乐"><br>
      看动漫<input type="checkbox" name="hobby" v-model="userInfo.hobby" value="看动漫"><br>
      轻小说<input type="checkbox" name="hobby" v-model="userInfo.hobby" value="轻小说"><br>
      所在城市:
      <select name="city" v-model="userInfo.city">
        <option value="Tokyo">东京</option>
        <option value="Osaka">大阪</option>
        <option value="nagoya">名古屋</option>
      </select>
      评论:<textarea name="comment" v-model="userInfo.textArea"></textarea><br>
      控制台信息打印:<input type="text" @change="mySubmit">
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data(){
    return {
      'userInfo':{
        'username':'',
        'password':'',
        'gender':'',
        'hobby':[],
        'city':'',
        'textArea':'',
      }
    }
  },
  methods:{
    mySubmit(){
      console.log('>>',this.userInfo)
    },
  }
}
</script>

<style scoped>

</style>
