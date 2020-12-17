import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import center from './routes/center';
import films from './routes/films';
import cinemas from './routes/cinemas'

const routes = [
  center,
  films,
  cinemas,
  {path:'/',redirect:'/films'},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
