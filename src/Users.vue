<template>
  <div>
    <h2>
      User time.
    </h2>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
export default {
  //watch it so when it's changed its always informed of it
  watch: {
    '$route'(to, from) {
      // alert(this.$route.params.teamId)
    }
  },
  //built in created function for when component is created
  created() {
    // alert(this.$route.params.teamId)
  },
  methods: {
    goHome() {
      //send the gohome route
      this.$router.push('/')
    }
  }
}
</script>