<template>
  <div id="content">
    <Loading :isLoading="isLoading"></Loading>

    <van-card v-for="(val) in list" :key="val.filmId">
      <template #thumb>
        <img class="price" :src="val.poster" />
      </template>
      <template #title>
        <div style="fontSize:16px;color:#191a1b;margin-right: 5px;margin-top:7px">
          {{val.name}}
          <span class="item">{{val.item.name}}</span>
        </div>
      </template>
      <template #desc>
        <div style="width:240px;height:17px" v-if="!val.grade"></div>
        <div v-show="val.grade">
          <span style="font-size: 13px;margin-top: 4px;color: #797d82;">观众评分:</span>
          <span style="color: #ffb232;font-size: 14px;">{{val.grade}}</span>
        </div>
        <div style="margin-top:5px;">
          <span class="slh">主演: {{val.actors | fun}}</span>
          <div class="comingSoonFilm-buy" style="float: right;">预购</div>
        </div>
        <div>{{val.nation}} | {{val.runtime}}分钟</div>
      </template>
      <!--
      -->
    
    </van-card>
  </div>
</template>

<script>
import url from "@/config/uri";
import Loading from "@/components/Loading";
import Vue from "vue";
import { Card, Sticky } from "vant";
Vue.use(Card);
Vue.use(Sticky);

export default {
  data: function() {
    return {
      list: [],
      isLoading: true,
      pageNum:1
    };
  },
    created() {
        this.getList()
    },
  mounted() {
    //滚动
      // window.addEventListener('scroll',()=>{
      //     let top = document.documentElement.scrollTop;
      //       let height = document.documentElement.clientHeight;
      //       if( top + height +10 > document.documentElement.offsetHeight ){
      //           // this.getList()
      //       }  
      // })
  },
  methods: {
    async getList() {
      let data = await this.$http.get(url.getComingSoonFilmList + `?pageNum=${this.pageNum}&pageSize=11`);
      this.list = [...this.list,...data.data.films]
      if( Math.ceil(data.data.total/10) > this.pageNum ){
        this.pageNum++;
      }
      if (this.list.length !== 0) {
        this.isLoading = false;
      }
    }
  },
  components: {
    Loading
  },
  filters: {
    fun: function(val) {
      if (!val) {
        return "暂无主演";
      }
      let str = "";
      val.forEach((v, k) => {
        str += v.name + " ";
      });
      return str;
    }
  }
};
</script>


<style scoped>
.price {
  width: 66px;
  border-radius: 0;
}
.van-card__thumb {
  margin: 0;
}
.slh {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 180px;
}
#content {
  margin-bottom: 50px;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
.comingSoonFilm-buy {
    float: right;
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ffb232;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
    border:1px solid;
}
</style>