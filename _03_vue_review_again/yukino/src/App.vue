<template>
  <div id="app">
<!--    <school/>-->
<!--    <YourName/>-->
<!--    <ClassBinding/>-->
<!--    <List/>-->
<!--    <Form/>-->
<!--    <Filters/>-->
<!--    <LifeCircleHook/>-->
    <Father/>
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

import Father from "@/components/cli/Father";

import Son from "@/components/cli/Son";
export default {
  name: 'App',
  components: {
    School,
    YourName,
    ClassBinding,
    List,
    Form,
    Filters,
    LifeCircleHook,
    Father,
    Son
  }
}
</script>

<style>

</style>
