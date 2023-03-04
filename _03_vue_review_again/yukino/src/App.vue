<template>
  <div id="app">
<!--    <school/>-->
<!--    <YourName/>-->
<!--    <ClassBinding/>-->
<!--    <List/>-->
    <Form/>
  </div>
</template>

<script>
import School from "@/components/School";

import YourName from "@/components/YourName";

import ClassBinding from "@/components/ClassBinding";

import List from "@/components/List";

import Form from "@/components/Form";
export default {
  name: 'App',
  components: {
    School,
    YourName,
    ClassBinding,
    List,
    Form

  }
}
</script>

<style>

</style>
