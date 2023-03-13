<template>
  <div>
    <input id="keyword" type="text" name="anime_name" placeholder="请输入您的用户名称😅😅,输入完毕之后按下回车^_^">
    <ul class="item_ul">
      <li class="li_item" v-for="item in animeList_item" @click="forCheckbox(item.id)" :key="item.id">
        &emsp;<input type="checkbox" :checked="item.isDone" id="select_item" name="anime">
        &nbsp;{{ item.name }}
        <div id="delete_item">
          <button id="delete_item_button">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ['animeList'],
  data() {
    return {
      'animeList_item': this.animeList
    }
  },
  methods: {
    forCheckbox(id) {
      this.animeList_item.forEach(p => {
        if (p.id === id) {
          p.isDone = !p.isDone
        }
      })
    },
  },
  // 实现鼠标悬停显示删除按钮,鼠标离开删除按钮消失的方法
  mounted() {
    //因为需要绑定多个,所以的话是querySelectorAll
    var arr_li = document.querySelectorAll('.li_item')
    //这里的话只有每一个都添加绑定事件的话才会
    arr_li.forEach(item=>{
      item.addEventListener('mouseenter',()=>{
        // console.log('>>>',item.childNodes[3].childNodes[0])
        item.childNodes[3].childNodes[0].style.display = 'block'
      }),
      item.addEventListener('mouseleave',()=>{
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

#keyword {
  display: block;
  margin: 14px auto;
  width: 95%;
  height: 30px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

li:hover {
  background-color: #d8d9d2;
}

#delete_item {
  float: right;
  margin-right: 10px;
}

#delete_item_button{
  background-color: #d53a3a;
  padding: 5px;
  border-radius: 5px;
  display: none;
  margin-top: 5px;
}
</style>
