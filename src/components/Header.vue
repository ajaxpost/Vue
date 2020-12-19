<template>
    <div>
        

       <div ref="container" >
        <van-sticky :container="container">
            <van-button type="warning">
                <van-tabs @click="onClick" v-model="num">
                    <van-tab title="正在热播"></van-tab>
                    <van-tab title="即将上映"></van-tab>
                </van-tabs>
            </van-button>
        </van-sticky>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs ,Toast ,Sticky  } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sticky);
export default {
    data:function(){
        return {
            url:['rebo','shangying'],
              container: null,
              num:0
        }
    },
    methods: {
        onClick(name, title) {
        Toast(title);
        this.$router.push({name:this.url[name]})
        // console.log(name,title);
       
    },
     mounted(){
        this.container = this.$refs.container;

        }
  },
   created() {

       this.num = this.url.indexOf(this.$route.name)

       
    },
}
</script>

<style scoped>
 
</style>