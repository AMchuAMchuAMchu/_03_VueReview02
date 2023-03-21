<template>
  <div>
    <h1>厚生省公安局刑侦科监视官{{ watcher }}....</h1>
    <button @click="changeWatcher">change-改变</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "PubSub",
  data() {
    return {
      watcher: '常守朱',
      flag: true
    }
  },
  methods: {
    changeWatcher() {
      this.watcher = this.flag ? '常守朱' : '霜月美佳'
      this.flag = !this.flag
      pubsub.publish('info',this.watcher)
    }
  }
}
</script>

<style scoped>

</style>
