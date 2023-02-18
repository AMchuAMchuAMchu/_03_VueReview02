<template>
  <div id="root">
    <h1>当前求和为{{$store.state.sum}}</h1>
  <select v-model.number="n">
    <option :value="1">1</option>
    <option :value="2">2</option>
    <option :value="3">3</option>
  </select>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <button @click="addOdd">当前求和为奇数再加</button>
  <button @click="addWait">等一等再加</button>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // sum:0,
      n:1
    }
  },
  methods:{
    add(){
      // this.sum  += this.n
      this.$store.dispatch('add',this.n)
    },
    sub(){
      // this.sum  -= this.n
      this.$store.dispatch('sub',this.n)
    },
    addOdd(){
      // if (this.sum % 2 !== 0){
      //   this.sum  += this.n
      // }
      this.$store.dispatch('addOdd',this.n)
    },
    addWait(){
      this.$store.dispatch('addWait',this.n)
    },
  }
}
</script>

<style lang="css">
button{
  margin-left: 5px;
}

</style>
