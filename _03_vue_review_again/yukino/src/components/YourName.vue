<template>
  <div>
    性:<input type="text" name="firstName" v-model="firstName">
    <hr>
    名:<input type="text" name="lastName" v-model="lastName">
    <hr>
    <!--    全名:<span>{{ firstName}}-{{lastName}}</span>-->
    <!--    全名:<span>{{firstNameC}}</span>-->
<!--    全名:<span>{{ fullNameM() }}</span>-->
    全名:<span>{{ fullNameM() }}</span>
    <hr>
    <h2>今天天气真{{ weather }}!!</h2>
    <button @click="changeWeather">黑魔法改变天气!!😅😅</button>
    <hr>
    <button @click="changeNumber">修改数字...</button>
  </div>
</template>

<script>
export default {
  name: "YourName",
  data() {
    return {
      firstName: 'yukino',
      lastName: 'asuna',
      weather: '冰雪如雪乃',
      flag: true,
      number:{
        num01:520,
        num02:1314
      },
    }
  },
  computed: {
    firstNameC: {
      get() {
        return this.firstName + '-' + this.lastName
      },
      set() {

      }
    }
  },
  methods: {
    changeNumber(){
      this.number.num01++
    },
    fullNameM() {
      return this.firstName + '-' + this.lastName
    },
    changeWeather() {
      this.flag = !this.flag
      this.weather = this.flag === true ? '冰雪如雪乃' : '灿烂如夏娜'
    }
  },
  watch: {
    'weather':{
      handler(newValue,oldValue){
        console.log('weather被修改了...',newValue,oldValue)
      }
    },
    'number':{
      // deep:true,
      handler(newValue,oldValue){
        console.log('number对象已经改变...',newValue,oldValue)
      }
    }
  },
}
</script>

<style scoped>

</style>
