<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @click="handleCheck(todoObj.id)"/>
      <span>{{todoObj.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // data(){
  //   return {
  //     //因为是props的值,所以的话是不能够直接更改的说,所以的话是需要事先复制一份到data再说的说...
  //     'todo':this.todoObj
  //   }
  // },
  props:['todoObj','checkTodo','deleteTodo'],
  methods:{
    handleCheck(e){
      // this.todo.done = !this.todo.done
      this.checkTodo(e)
    },
    handleDelete(id){
      if (confirm('客官确认删除吗?^_^')){
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color:#ddd;
}

li:hover button{
  display:block;
}
</style>
