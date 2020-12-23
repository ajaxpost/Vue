<template>
    <div>
        <van-tabbar v-model="active" @change="fun">
            <van-tabbar-item class="iconfont icon-dianying">电影</van-tabbar-item>
            <van-tabbar-item class="iconfont icon-yingyuan">影院</van-tabbar-item>
            <van-tabbar-item class="iconfont icon-wode">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import '@/assets/icon/iconfont.css'
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
     data() {
        return {
            active: 0,
            url:['/films','/cinemas','/center']
        };
     },
     methods:{
         fun:function(index){
             this.$router.push(this.url[index])
         }
     },
     created(){
       this.active = this.url.indexOf(this.$route.path) === -1 ? 0 : this.url.indexOf(this.$route.path)
     },
     watch:{
         $route:function(newVal){
             this.active = this.url.indexOf(newVal.path) === -1 ? 0 : this.url.indexOf(newVal.path)
         }
     }
}
</script>