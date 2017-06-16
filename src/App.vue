<template>
  <div id="app">
    <h2>Time to play.</h2>
    <p>Coordinates: {{ x }} {{ y }} -
      <span v-on:mousemove.stop="">DEAD SPOT</span>
    </p>
    <!--Modifiers for v-on -->
    <input type="text" v-on:keyup.enter.space="alertMe" <hr>
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
      x: 0,
      y: 0
    }
  },
  methods: {
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  },
  alertMe() {

  }
}
</script>


<style>

</style>
