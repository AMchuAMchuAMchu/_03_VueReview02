<template>
  <div class="todoList">
    <div class="box_in">
      <MySearch/>
      <MyList :animeList="animeList"/>
      <MyFooter :animeList="animeList"/>
    </div>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

import MySearch from "@/components/todoList/MySearch";

import MyList from "@/components/todoList/MyList";

import MyFooter from "@/components/todoList/MyFooter";

export default {
  name: "MyTodoList",
  data() {
    return {
      'animeList': [
        {'id': 1001, 'name': '罪恶王冠', 'isDone': false},
        {'id': 1002, 'name': '心理测量者', 'isDone': false},
        {'id': 1003, 'name': '甲铁城的卡巴内瑞', 'isDone': false},
        {'id': 1004, 'name': '创圣的大天使', 'isDone': false},
      ]
    }
  },
  components: {
    MySearch,
    MyList,
    MyFooter
  },
  methods: {
    // 检查已完成的(就是打钩的那些)
    checkDone(data) {
      this.animeList = data
      // console.log('>>>>>',this.animeList)
    },
    // 添加anime
    searchAnime(anime) {
      let anime_item = {'id': nanoid(), 'name': anime, 'isDone': false}
      this.animeList.unshift(anime_item)
    },
    // 选择全部
    selectAll() {
      this.animeList.forEach(i => {
        i.isDone = true
      })
    },
    // 取消全部
    cancelAll() {
      this.animeList.forEach(i => {
        i.isDone = false
      })
    },
    //根据id删除元素
    deleteSelected(data) {
      // console.log('>>>>>>', this.animeList)
      for (let j = 0; j < data.length; j++) {
        this.animeList = this.animeList.filter((a) => {
          // console.log('arr', data[j])
          return a.id !== data[j]
        })
      }
      this.$bus.$emit('animeListFrom',this.animeList)
      // console.log('>>', this.animeList)
    }
  },
  // 生命周期钩子:数据更新后触发MyFooter更新数据
  updated() {
    this.$bus.$emit('updateFooter',this.animeList)
  },
  // 生命周期钩子:挂载全局事件
  mounted() {
    //检查已勾选的
    this.$bus.$on('checkDone', this.checkDone)
    //添加anime
    this.$bus.$on('searchAnime', this.searchAnime)
    //选择全部
    this.$bus.$on('selectAll', this.selectAll)
    //取消全部
    this.$bus.$on('cancelAll', this.cancelAll)
    //删除已选定的
    this.$bus.$on('deleteSelected', this.deleteSelected)
  },
  //销毁之前:解绑自定义事件
  beforeDestroy() {
    this.$bus.$off('checkDone')
  }

}
</script>

<style scoped>
.todoList {
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.3);
  border: solid 3px rgba(119, 74, 30, 0.4);
  border-radius: 10px;
  width: 600px;
  height: 400px;
  margin: 100px auto;
}

.box_in {
  width: 90%;
  height: 90%;
  margin: 18px auto;
  border: 3px solid rgba(199, 192, 192, 0.5);
  border-radius: 5px;
}
</style>
