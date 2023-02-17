<template>
  <div class="todo-footer" v-show="all">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{ doneTodo }}</span> / 全部{{ all }}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  'props': ['todos','checkDone','clearTodos'],
  computed: {
    doneTodo() {
      // var count = 0
      // this.todos.forEach((todo)=>{
      //   if(todo.done) count++
      // })
      // return count
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    all() {
      return this.todos.length
    },
    isAll:{
      get(){
        return this.doneTodo === this.all && this.all > 0
      },
      set(value){
        this.checkDone(value)
      }
    }
  },
  methods:{
    clearAll(){
      this.clearTodos()
    }
  }

}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
