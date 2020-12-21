import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //数据源
  state: {
    className:'BK_2003',
    username:'hdk',
    age:18,
    bool:true,
    number:1
  },
  //修改数据源的方法(同步)
  mutations: {
    fun:function(state,val){
      state.username = val
      console.log(state);
    },
    setBool:function(state,val){
      state.bool = val;
    },
    // test:function(a){
    //   console.log(a);
    // }
  },
  //修改数据源的方法(异步)
  actions: {
    one:function(state,val){
      setTimeout(()=>{
        console.log('我是延时器' + val)
      },1000)
    }
  },
  //对数据进行格式处理
  getters:{
    fun2:function(a){
      return '我我我我'
      
    }
  },
  //模块化拆
  modules: {
  },
})
