<template>
  <div>
    <h1>今天天气很nice啊!!我在{{school}}学习{{subject}}</h1>
    <input name="c01" type="text" v-model="character"><br>
    <h2>今天天气真{{weather}}</h2>
    <button @click="changeWeather">利用黑魔法变换天气</button>
    <hr>
    <a href="http://bilibili.com" @click.prevent="showInfo">网站跳转😯😯</a><hr>
    <a href="http://bilibili.com" @click.once.prevent="showInfo">网站跳转😯😯(只会触发一次,请谨慎使用O(∩_∩)O)</a>
    <hr>
    <div @click="showInfo" class="box01">
      <a href="http://atguigu.com" @click.stop="showInfo">网站跳转😯😯</a>
    </div>
    <hr>
    <input type="text" placeholder="按下回车有提示喔~😯" @keyup.enter="showInfo">
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      school:'尚硅谷',
      subject:'Java',
      character:'雪之下雪乃',
      weather:'炎热,想脱衣服...',
      change:true
    }
  },
  methods:{
    changeWeather(event) {
      this.change = !this.change
      this.weather = this.change === true?'炎热,想脱衣服...':'寒冷,不想下床...'
    },
    showInfo(){
      alert('你确定要去吗??🎃🎃')
    }
  }

}
</script>

<style scoped>
.box01{
  width: 100px;
  height: 100px;
  background-color: aqua;
  margin: 100px auto;
}
</style>
