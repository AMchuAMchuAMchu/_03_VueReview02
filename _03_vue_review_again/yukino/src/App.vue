<template>
  <div id="app">
<!--    <school/>-->
<!--    <YourName/>-->
    <ClassBinding/>
  </div>
</template>

<script>
import School from "@/components/School";

import YourName from "@/components/YourName";

import ClassBinding from "@/components/ClassBinding";
export default {
  name: 'App',
  components: {
    School,
    YourName,
    ClassBinding
  }
}
</script>

<style>

</style>
