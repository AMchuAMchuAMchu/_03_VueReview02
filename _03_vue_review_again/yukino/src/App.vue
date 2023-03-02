<template>
  <div id="app">
<!--    <school/>-->
<!--    <YourName/>-->
<!--    <ClassBinding/>-->
    <List/>
  </div>
</template>

<script>
import School from "@/components/School";

import YourName from "@/components/YourName";

import ClassBinding from "@/components/ClassBinding";

import List from "@/components/List";
export default {
  name: 'App',
  components: {
    School,
    YourName,
    ClassBinding,
    List
  }
}
</script>

<style>

</style>
