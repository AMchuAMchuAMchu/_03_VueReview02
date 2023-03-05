<template>
  <div>
    <div :style="box01"></div>
    <button @click="stop">停止变换</button>
  </div>
</template>

<script>
export default {
  name: "LifeCircleHook",
  data() {
    return {
      'flag': true,
      'box01': {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        margin: '100px auto',
        opacity: 1
      }
    }
  },
  methods: {
    stop() {
      this.$destroy()
    }
  },
  mounted() {
    //实现盒子的颜色渐变从1->0,再从0->1,而不是之前的简单的1->0,然后又是1->0....
    this.timer = setInterval(() => {
      if (this.box01.opacity > 0 && this.flag === true) {
        this.box01.opacity -= 0.05
        if (this.box01.opacity <= 0.05){
          this.flag = false
        }
      } else if (this.box01.opacity > 0 && this.flag === false) {
        this.box01.opacity += 0.05
        if (this.box01.opacity >= 0.95){
          this.flag = true
        }
      } else if (this.box01.opacity < 0) {
        this.box01.opacity = 1
      }
    }, 100)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    console.log('vm即将销毁.....')
  }
}
</script>

<style scoped>
.box01 {

}
</style>
