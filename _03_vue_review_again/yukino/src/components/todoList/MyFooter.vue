<template>
  <div class="anime_footer">
    <input @click="selectAll(val)" type="checkbox" :checked="count===animeList_f.length" name="anime_done">
    <span>
    &emsp;已完成{{ count }}/全部{{ animeList.length }}
      <button @click="deleteSelected" class="button_f" type="button">删除已选</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  //接受父组件传过来的数据
  props: ['animeList'],
  data() {
    return {
      // 已完成的数据绑定
      count: 0,
      // 因为props的数据无法直接修改,所以的话复制一份到data了
      animeList_f: this.animeList,
      // 实现按钮的选中效果以及事件触发的flag
      val: true
    }
  },
  // 绑定更新数据的全局事件
  mounted() {
    this.$bus.$on('updateFooter',this.updateFooter)
  },
  //
  methods: {
    // 从父组件更新数据的方法
    updateFooter(data){
      this.animeList_f = data
    },
    // 删除已选定的,同时收集已选定的id封装为数组传给父组件的全局事件执行
    deleteSelected() {
      // 定义数组存储id
      let delete_arr = []
      // 遍历查询已选定的item然后添加到数组
      this.animeList_f.forEach(a => {
        if (a.isDone === true) {
          delete_arr.push(a.id)
        }
      })
      // console.log('delete:',delete_arr)
      // 触发父组件处理已选定删除的事件
      this.$bus.$emit('deleteSelected',delete_arr)
      // 触发MyItem组件的item_watch事件查看数据是否及时更新
      this.$bus.$emit('item_watch')
      //重置选框的flag
      this.val = true
    },
    //点击多选框触发选择全部/取消全部的事件
    selectAll(val) {
      if (val) {
        this.$bus.$emit('selectAll')
        this.val = !this.val
      } else if (val === false) {
        this.$bus.$emit('cancelAll')
        this.val = !this.val
      }

    }
  },
  //监视属性,监视列表同时标记已完成的个数提供给前端展示
  watch: {
    animeList_f: {
      deep: true,
      immediate: true,
      handler(newValue, oldValue) {
        // console.log('foot>>',this.animeList_f)
        this.count = 0
        this.animeList_f.forEach(a => {
          if (a.isDone) {
            this.count += 1
          }
        })
      }
    }
  },
}
</script>

<style scoped>
.anime_footer {
  top: 450px;
  position: absolute;
  width: 100%;
  height: 30px;
  margin-left: 25px;
}

.button_f {
  display: block;
  float: right;
  margin-right: 1035px;
}
</style>
