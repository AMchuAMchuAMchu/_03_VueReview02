<template>
  <div class="todoList">
    <div class="box_in">
      <MySearch/>
      <MyList/>
      <MyFooter/>
    </div>
  </div>
</template>

<script>

import MySearch from "@/components/todoList/MySearch";

import MyList from "@/components/todoList/MyList";

import myFooter from "@/components/todoList/MyFooter";

export default {
  name: "MyTodoList",
  components: {
    MySearch,
    MyList,
    myFooter
  }

}
</script>

<style scoped>
.todoList {
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.3);
  border: solid 3px rgba(119, 74, 30, 0.5);
  border-radius: 10px;
  width: 600px;
  height: 400px;
  margin: 100px auto;
}
.box_in{
  width: 90%;
  height: 90%;
  margin: 18px auto;
  border: 3px solid rgba(58, 109, 159, 0.5);
  border-radius: 5px;
}
</style>
