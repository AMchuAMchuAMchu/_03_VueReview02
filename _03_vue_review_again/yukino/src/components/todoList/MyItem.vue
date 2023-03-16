<template>
  <div>
    <ul class="item_ul">
      <li ref="li_item" class="li_item" v-for="item in animeList_item" @click="forCheckbox(item.id)" :key="item.id">
        &emsp;<input type="checkbox" :checked="item.isDone" class="select_item" name="anime">
        &nbsp;{{ item.name }}
        <div class="delete_item">
          <button @click="delete_item(item.id)" class="delete_item_button">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props:['animeList'],
  data() {
    return {
      'animeList_item':this.animeList,
    }
  },
  methods: {
    updateItemFrom(data){
      this.animeList_item = data
    },
    delete_item(id){
     this.$bus.$emit('delete_item',id)
    },
    // 触发全局事件让数据从父组件那边更新
    animeListForm(data){
      this.animeList_item = data
    },
    //全局事件查看数据是否更新
    item_watch(){
      // console.log('ite_watch',this.animeList)
    },
    //点击选定/取消anime
    forCheckbox(id) {
      // console.log('>>>',id)
      this.animeList_item.forEach(p => {
        if (p.id === id) {
          p.isDone = !p.isDone
        }
      })
      // 触发全局事件传递数据
      this.$bus.$emit('checkDone', this.animeList_item)
    },
  },
  // 实现鼠标悬停显示删除按钮,鼠标离开删除按钮消失的方法
  // watch:{
  //   animeList_item: {
  //     deep: true,
  //     immediate: true,
  //     handler(newValue,oldValue) {
  //       // console.log('>>>',this.animeList_item)
  //       //因为需要绑定多个,所以的话是querySelectorAll
  //       let arr_li = document.querySelectorAll('.li_item')
  //       // console.log('>>>',arr_li)
  //       //这里的话只有每一个都添加绑定事件的话才会
  //       arr_li.forEach(item => {
  //         item.addEventListener('mouseenter', () => {
  //           // console.log('>>>',item.childNodes[3].childNodes[0])
  //           item.childNodes[3].childNodes[0].style.display = 'block'
  //         }),
  //             item.addEventListener('mouseleave', () => {
  //               // console.log('>>>')
  //               item.childNodes[3].childNodes[0].style.display = 'none'
  //             })
  //       })
  //     }
  //   }
  // },
  // 实现鼠标悬停显示删除按钮+选定条背景色加深,鼠标离开删除按钮消失的方法+背景色消失的效果
  mounted() {
    this.$bus.$on('updateItemFrom',this.updateItemFrom)
    // 绑定全局事件
    this.$bus.$on('animeListFrom',this.animeListForm)
    // 绑定全局事件
    this.$bus.$on('item_watch',this.item_watch)
    //因为需要绑定多个,所以的话是querySelectorAll
    let arr_li = document.querySelectorAll('.li_item')
    //这里的话只有每一个都添加绑定事件的话才会
    arr_li.forEach(item => {
      //鼠标进去触发事件
      item.addEventListener('mouseenter', () => {
        // console.log('>>>',item.childNodes[3].childNodes[0])
        // 选定节点修改样式
        item.childNodes[3].childNodes[0].style.display = 'block'
      }),
          // 鼠标离开事件触发
          item.addEventListener('mouseleave', () => {
            // console.log('>>>')
            // 选定节点修改样式
            item.childNodes[3].childNodes[0].style.display = 'none'
          })
    })
  },
  // 生命周期钩子 逻辑同上mounted钩子,不过这里的话是实现页面一上来展示鼠标一进去/离开触发事件
  updated() {
    // console.log('myitem>>>',this.animeList_item)
    //因为需要绑定多个,所以的话是querySelectorAll
    let arr_li = document.querySelectorAll('.li_item')
    //这里的话只有每一个都添加绑定事件的话才会
    arr_li.forEach(item => {
      item.addEventListener('mouseenter', () => {
        // console.log('>>>',item.childNodes[3].childNodes[0])
        item.childNodes[3].childNodes[0].style.display = 'block'
      }),
          item.addEventListener('mouseleave', () => {
            // console.log('>>>')
            item.childNodes[3].childNodes[0].style.display = 'none'
          })
    })
  }

}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.item_ul {
  margin-top: 10px;
  list-style: none;
}

li {
  margin: -2px auto;
  width: 95%;
  height: 40px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border-collapse: collapse;
  line-height: 40px;
}


li:hover {
  background-color: #d8d9d2;
}

.delete_item {
  float: right;
  margin-right: 10px;
}

.delete_item_button {
  background-color: #d53a3a;

  padding: 5px;
  border-radius: 5px;
  display: none;
  margin-top: 5px;
}
</style>
