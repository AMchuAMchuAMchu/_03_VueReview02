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
  props: ['animeList'],
  data() {
    return {
      count: 0,
      animeList_f: this.animeList,
      val: true
    }
  },
  mounted() {
    this.$bus.$on('updateFooter',this.updateFooter)
  },
  methods: {
    updateFooter(data){
      this.animeList_f = data
    },
    deleteSelected() {
      let delete_arr = []
      this.animeList_f.forEach(a => {
        if (a.isDone === true) {
          delete_arr.push(a.id)
        }
      })
      // console.log('delete:',delete_arr)
      this.$bus.$emit('deleteSelected',delete_arr)
      this.$bus.$emit('item_watch')
      //重置
      this.val = true
    },
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
