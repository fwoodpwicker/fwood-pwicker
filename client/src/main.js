import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Settings from './components/Settings.vue'
import Tokens from './components/Token.vue'
import Page404 from './components/Page404.vue'
import Pick from './components/Pick.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

export const EventBus = new Vue()

const routes = [
  { path: '', component: Home },
  { path: '/home', component: Home },
  { path: '/settings', component: Settings },
  { path: '/tokens', component: Tokens },
  { path: '/pick', component: Pick },
  { path: '*', component: Page404 }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
