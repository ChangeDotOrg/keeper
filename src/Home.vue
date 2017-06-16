<template>
  <div>
    <canvas id="game1" v-on:mousemove="updateCoordinates">
    </canvas>
    Coordinates: {{ x }} {{ y }}
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
      this.y = event.clientY - 185;
    }
  },
  alertMe() {

  }
}
</script>

<style>
#game1 {
  width: 600;
  height: 600;
  background-color: blue;
}
</style>