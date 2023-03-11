<template>
  <div>
    <MyItem/>
    <MyItem/>
    <MyItem/>
    <MyItem/>
  </div>
</template>

<script>
import MyItem from "@/components/todoList/MyItem";

export default {
  name: "MyList",
  components:{
    MyItem
  }
}
</script>

<style scoped>

</style>
