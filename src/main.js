import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'

Vue.component('app-message', Message)

//overrides dom to tell it to use index.html as a hook
new Vue({
  el: '#app',
  render: h => h(App)
})