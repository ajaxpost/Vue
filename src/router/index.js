import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


Vue.use(VueRouter)

const a = VueRouter.prototype.push;
VueRouter.prototype.push = function(location){
  return a.call(this,location).catch(err=>err)
}
import center from './routes/center';
import films from './routes/films';
import cinemas from './routes/cinemas'

const routes = [
  ...center,
  ...films,
  cinemas,
  {path:'/tab1',component:()=>import('@/test/tab1')},
  {path:'/city',component:()=>import('@/components/City')},
  {path:'/',redirect:'/films'},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局前置守卫
router.beforeEach((to,from,next)=>{
  let arr = [
    '/yu_e'
  ]
  if(arr.indexOf(to.path) !== -1 && !store.state.token){
      router.push({path:'/login',query:{toUrl:'/yu_e'}})
  }else{
    next()
  }
})

export default router
