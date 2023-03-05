<template>
  <!--  <h3>现在时间是:{{timeM()}}</h3>-->
  <!--  <h3>现在时间是:{{timeCom}}</h3>-->
  <div>
    <h3>现在时间是:{{ time|timeFil }}</h3>
    <h2 v-text="queue">雪之下雪乃-冰雪女王</h2>
    <h3 v-html="love"></h3>
    <h4 v-once>初始化的n值:{{ n }}</h4>
    <h4>实时的n值:{{ n }}</h4>
    <button @click="n++">n++</button>
    <hr>
    <span v-big="n"></span>
  </div>

</template>

<script>

import dayjs from 'dayjs'

export default {
  name: "Filters",
  created() {
    console.log('我是生命周期钩子created....')
    alert('我是钩子...')
  },
  data() {
    return {
      'time': '2691561317643',
      'queue': 'yukino??Inori!!!',
      'love': '<h1>楪祈万岁!!~\(≧▽≦)/~</h1><h1>楪祈万岁!!~\(≧▽≦)/~</h1>',
      'n': 520
    }
  },
  methods: {
    timeM() {
      return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
    }
  },
  computed: {
    timeCom: {
      get() {
        return dayjs(this.time).format('YYYY年MM月DD日')
      }
    }
  },
  filters: {
    timeFil(value, str = 'YYYY年MM月DD日 呵呵~~') {
      return dayjs(value).format(str)
    }
  },
  directives: {
    big(element, binding) {
      element.innerHTML = binding.value * 20
    }
  }
}
</script>

<style scoped>

</style>
