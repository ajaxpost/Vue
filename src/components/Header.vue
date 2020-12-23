<template>
  <div style="height:50px">
    <zuobiao v-show="buy"></zuobiao>
    <van-tabs @click="onClick" :class="{one:bool}" v-model="num">
      <van-tab title="正在热播"></van-tab>
      <van-tab title="即将上映"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Toast } from "vant";
import zuobiao from "@/components/dianying_zuobiao.vue";
Vue.use(Tab);
Vue.use(Tabs);

export default {
  data: function() {
    return {
      url: ["rebo", "shangying"],
      bool: true,
      num: 0,
      buy: false,
     
    };
  },
  methods: {
    onClick(name, title) {
      Toast(title);
      this.$router.push({ name: this.url[name] });

    }
  },
  created(){
    this.num = this.url.indexOf(this.$route.name)
  },
  mounted() {
    
    window.addEventListener("scroll", () => {
      let top = document.documentElement.scrollTop;
      if (top > 200) {
        this.bool = true;
        this.buy = true;
      } else {
        this.bool = false;
        this.buy = false;
      }
  
    });
  },
  components: {
    zuobiao
  },
  watch:{
    $route:function(newVal){
        this.num = this.url.indexOf(newVal.name)
        // console.log(newVal)
    }
  }
};
</script>

<style scoped>
.one {
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
}
</style>