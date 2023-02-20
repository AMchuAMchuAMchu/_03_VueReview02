<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
<!--          <a class="list-group-item" href="./home-news.html">News</a>-->
          <router-link class="list-group-item" active-class="active" to="/Home/News">News</router-link>
        </li>
        <li>
<!--          <a class="list-group-item active" href="./home-message.html">Message</a>-->
          <router-link class="list-group-item" active-class="active" to="/Home/Message">Message</router-link>
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
