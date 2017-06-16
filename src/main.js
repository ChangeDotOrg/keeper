import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import Message from "./Message.vue"
import Home from "./Home.vue"
import Users from "./Users.vue"

/**
 * create routing
 */
Vue.use(VueRouter)

const routes = [{
  path: "/users/:teamId",
  component: Users
}, {
  path: "/",
  component: Home
}]

const router = new VueRouter({
  // routes: routes
  //or just do because its same name needed
  routes,
  mode: "history" //ONLY NEEDED TO REMOVE # in browser for server otherwise looks like =>(localhost:8080/#/) 
})

Vue.component("app-message", Message)

//overrides dom to tell it to use index.html as a hook
new Vue({
  el: "#app",
  router, //can just use router if named router otherwise  router:router needed
  render: h => h(App)
})