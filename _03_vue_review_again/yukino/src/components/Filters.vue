<template>
<!--  <h3>现在时间是:{{timeM()}}</h3>-->
<!--  <h3>现在时间是:{{timeCom}}</h3>-->
  <h3>现在时间是:{{time|timeFil}}</h3>
<h2 >雪之下雪乃-冰雪女王</h2>
</template>

<script>

import dayjs from 'dayjs'

export default {
  name: "Filters",
  data(){
    return {
      'time':'2691561317643',
      'queue':'yukino??Inori!!!'
    }
  },
  methods:{
    timeM(){
      return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
    }
  },
  computed:{
    timeCom:{
      get(){
        return dayjs(this.time).format('YYYY年MM月DD日')
      }
    }
  },
  filters:{
    timeFil(value,str = 'YYYY年MM月DD日 呵呵~~'){
      return dayjs(value).format(str)
    }
  }
}
</script>

<style scoped>

</style>
