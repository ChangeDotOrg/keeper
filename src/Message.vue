<template>
  <div>
    <h2>{{ message }}</h2>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
  </div>
</template>

<script>
import Input from './Input.vue'
const _ = require('lodash')

export default {
  data() {
    return {
      message: 'This is cool'
    }
  },
  components: {
    'app-input': Input
  },
  methods: {

  }
}
</script>
