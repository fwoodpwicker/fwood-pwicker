import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Settings from './components/Settings.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/settings', component: Settings }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
