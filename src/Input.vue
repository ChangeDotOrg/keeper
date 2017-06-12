<template>
  <div>
    <p>{{ msg }}</p>
    <input type="text" :value="msg" @input="changeMessage">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value
      //inform parent component of the change(message.vue)
      this.$emit('messageChanged', this.message)
    }
  }
}
</script>