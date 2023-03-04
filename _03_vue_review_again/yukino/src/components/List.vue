<template>
  <div id="root">
    <h2 align="center">动漫列表</h2>

    <input class="search" type="text" name="keyword" v-model:value="keyword" placeholder="请输入检索关键字😯😯">
    <br>
    <div class="box_add_beauty">
      <div class="box_add">
        动漫名称:<input type="text" name="name" v-model="name">
        角色:<input type="text" name="c1" v-model="c1">
        年龄:<input type="text" name="age" v-model="age">
        <button @click="add">添加</button>
      </div>
    </div>

    <button @click="sortType = 0">原序</button>
    <button @click="sortType = 1">降序</button>
    <button @click="sortType = 2">升序</button>

    <div class="box01">
      <table>
        <tr>
          <th>动漫名</th>
          <th>角色</th>
          <th>年龄</th>
        </tr>
        <tr v-for="item in filterAnimeList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.c1 }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {

  name: "List",
  data() {
    return {
      'animeList': [
        {'id': 1001, 'name': '我的青春恋爱物语果然有问题', c1: '雪之下雪乃', 'age': 17},
        {'id': 1002, 'name': '实力至上主义教室', c1: '堀北铃音', 'age': 16},
        {'id': 1003, 'name': '冰菓', c1: '千反田爱瑠', 'age': 17},
        {'id': 1004, 'name': '青春猪头少年', c1: '樱岛麻衣', 'age': 15},
        {'id': 1005, 'name': '网络胜利组', c1: '盛冈森子', 'age': 30},
      ],
      'keyword': '',
      'animeListF': [],
      'name': '',
      'c1': '',
      'age': '',
      'sortType': 0
    }
  },
  methods: {

    add() {
      if (this.name !== '' && this.c1 !== '' && this.age !== '') {
        var _id = nanoid()
        var item = {'id': _id, 'name': this.name, 'c1': this.c1, 'age': this.age}
        this.animeListF.push(item)
        this.animeList.push(item)
        this.name = ''
        this.c1 = ''
        this.age = ''
        console.log(item)
      }

    }
  },
  // watch: {
  //   keyword: {
  //     immediate: true,
  //     handler(val) {
  //       this.animeListF = this.animeList.filter((item) => {
  //         return item.name.indexOf(val) !== -1
  //       })
  //
  //       if (this.sortType) {
  //         this.animeListF = filters.sort((p1, p2) => {
  //           return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age
  //         })
  //       }
  //     }
  //   },
  //   sortType: {
  //     immediate: true,
  //     handler() {
  //       if (this.sortType) {
  //         this.animeListF = this.animeListF.sort((p1, p2) => {
  //           return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age
  //         })
  //       }
  //     }
  //
  //   }
  // },
  computed: {
    filterAnimeList: {
      get() {
        this.animeListF = this.animeList.filter((item) => {
          return item.name.indexOf(this.keyword) !== -1
        })
        this.animeListF = this.animeListF.sort((p1, p2) => {
          if (this.sortType) {
            return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age
          }
        })
        return this.animeListF
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

.box01 {
  width: 500px;
  height: 200px;
  margin: 50px auto;
}

table {
  margin: 100px auto;
  border: blue solid 3px;
  border-spacing: 0;
}

th, td {
  border: blue solid 3px;
}

.box_add_beauty {
  margin: 3px auto;
  width: 830px;
  height: 50px;
  background-color: orange;
  border-radius: 10px;
}

.box_add {
  position: relative;
  margin: 5px auto;
  width: 790px;
  height: 25px;
  top: 10px;
}

.search {
  display: block;
  width: 200px;
  height: 30px;
  margin: 10px auto;
  background-color: orange;
}
</style>
