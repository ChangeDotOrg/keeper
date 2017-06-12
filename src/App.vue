<template>
  <div id="app">
    <h2>Time to play.</h2>
    <hr>
    <!--router link can bind to property   :to="" -->
    <router-link to="/">Home</router-link>
    <router-link to="/users/10">Users</router-link>
    <router-link to="/users/12">Users</router-link>
    <hr>
    <router-view></router-view>
    <!--<app-message></app-message>-->
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>


<style>

</style>
