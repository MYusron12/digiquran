import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {createRouter, createWebHistory} from 'vue-router'
import AllSurat from './components/AllSurat.vue'
import SuratDetail from './components/SuratDetail.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AllSurat
    },
    {
      path: '/:id',
      name: 'SuratDetail',
      component: SuratDetail
    }
  ]
})

app.config.globalProperties.$http = axios
app.use(router)
app.mount('#app')