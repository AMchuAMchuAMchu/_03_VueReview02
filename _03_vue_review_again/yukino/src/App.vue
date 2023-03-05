<template>
  <div id="app">
<!--    <school/>-->
<!--    <YourName/>-->
<!--    <ClassBinding/>-->
<!--    <List/>-->
<!--    <Form/>-->
<!--    <Filters/>-->
    <LifeCircleHook/>
  </div>
</template>

<script>
import School from "@/components/School";

import YourName from "@/components/YourName";

import ClassBinding from "@/components/ClassBinding";

import List from "@/components/List";

import Form from "@/components/Form";

import Filters from "@/components/Filters";

import LifeCircleHook from "@/components/LifeCircleHook";
export default {
  name: 'App',
  components: {
    School,
    YourName,
    ClassBinding,
    List,
    Form,
    Filters,
    LifeCircleHook

  }
}
</script>

<style>

</style>
