<template>
  <div id="content">
    <van-pull-refresh v-model="isLoading2" success-text="刷新成功" @refresh="onRefresh">
      <Loading :isLoading="isLoading"></Loading>
      <van-card v-for="(val) in list" :key="val.filmId" @click="deF(val.filmId)">
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
            <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
          </div>
          <div>{{val.nation}} | {{val.runtime}}分钟</div>
        </template>
        <!--
        -->
      </van-card>
    </van-pull-refresh>

    <!-- <p>刷新次数: {{ count }}</p> -->
  </div>
</template>
<script>
import url from "@/config/uri";
import Loading from "@/components/Loading";
import Vue from "vue";
import { Card, PullRefresh } from "vant";
import "@/assets/gouwu/iconfont.css";
Vue.use(Card);
Vue.use(PullRefresh);
export default {
  data: function() {
    return {
      list: [],
      isLoading: true,
      isLoading2: false,    // 起始的值是什么无所谓
      pageNum: 1,
      tmp: [],
      total:1,
    };
  },
  created() {
    this.getList();
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
  },
  methods: {
    deF: function(id) {
      this.$router.push("/film/" + id);
    },
    onRefresh: function() {
      this.getList(() => {
        this.isLoading2 = false;
      });
    },
    getList: function(cb = null) {
      if( this.pageNum <= this.total ){
      this.$http
        .get(url.getNowPlayingFilmList + `?pageNum=${this.pageNum}`)
        .then(ret => {
          this.total = Math.ceil(ret.data.total/10);
          if (this.pageNum <= Math.ceil(ret.data.total / 10)) {
            this.pageNum++;
            this.list = ret.data.films.concat(this.list);
          }
          if (cb) {
            cb();
          }else{
             this.isLoading = false;
          }
        });
      }else{
        cb()
      }
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
  /* margin-top: 44px; */
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
.nowPlayingFilm-buy {
  line-height: 25px;
  height: 25px;
  width: 50px;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: relative;
  border: 1px solid;
}
</style>