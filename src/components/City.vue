<template>
  <div>
    <van-index-bar :index-list="CityEng">
        <template v-for="(val,key) in City" >
            <van-index-anchor index="1" :key="key" style="background:#f4f4f4">{{val.id}}</van-index-anchor>
            <van-cell :title="val2.name" v-for="(val2,key2) in val.data" :key="key2" @click="fun(val2.cityId,val2.name)"/>
        </template>
     
    </van-index-bar>
  </div>
</template>

<script>
import url from "@/config/uri";
import Vue from "vue";
import { IndexBar, IndexAnchor , Cell } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
  data() {
    return {
      //26个英文字母
      Eng: [],
      //获取的信息
      City: [],
      //城市首字母
      CityEng: []
    };
  },
  created() {
    this.$store.commit("setBool", false);
    for (let i = 65; i <= 90; i++) {
      this.Eng.push(String.fromCharCode(i));
    }
    this.$http.get(url.getCitiesInfo).then(ret => {
      this.Eng.forEach((v, k) => {
        let tmp = ret.data.cities.filter(function(val) {
          return v.toLowerCase() == val.pinyin.substr(0, 1);
        });
        if (tmp.length) {
          this.CityEng.push(v);
          this.City.push({ id: v, data: tmp });
        }
      });
    });
  },
    
  beforeDestory() {
    this.$store.commit("setBool", true);
  },
  methods:{
      fun:function(id,name){
          this.$store.commit('setCity',{id:id,name:name})
          this.$router.go(-1)
      }
  }
};
</script>