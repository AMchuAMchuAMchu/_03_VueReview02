<template>
  <div>
    <button @click="getItem">触发事件</button>
  </div>
</template>

<script>

export default {
  name: "WebLocalStorage",
  mounted() {
    localStorage.setItem('name','雪之下雪乃')
    sessionStorage.setItem('anime','约定的梦幻岛')
  },
  methods:{
    getItem(){
      let a = localStorage.getItem('name')
      let aa = sessionStorage.getItem('anime')
      console.log('localStorage>>>',a)
      console.log('sessionStorage>>>',aa)
    }
  }
}
</script>

<style scoped>

</style>
