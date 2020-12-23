<template>
  <div>
    <!-- 头部 -->
    <div class='film-header'>
      <!-- 按钮 -->
      <div class="goBack" @click="goBack">
     
           <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />

      <!-- title -->
      <div class="title" v-show="show_title">{{film.name}}</div>
        </div>
       
    </div>
    <!-- 图片 -->
    <div class="poster">
      <img v-lazy="film.poster" alt />
    </div>
    <!-- 文字详情 -->
    <div style="background:#f4f4f4">
      <div class="film-detail">
        <div style="fontSize:18px">
          <div class="film-name">
            {{film.name}}
            <span class="item">{{this.filmType}}</span>
          </div>

          <div class="film-grade" v-show="film.grade">
            <span class="grade">{{film.grade}}</span>
            <span class="grade-text">分</span>
          </div>
        </div>
        <div>{{film.category}}</div>
        <div>{{film.premiereAt | premiereAt}} 上映</div>
        <div>{{film.nation}} | {{film.runtime}}</div>
        <div
          style="height:36px;overflow:hidden;fontSize:13px;transition:.7s;"
          class="conent"
        >{{film.synopsis}}</div>
        <div :class="{toggle:true,hid:!conentBool}" @click="toggle1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
            alt
          />
        </div>
        <div
          class="conent2"
          style="color:#fff;position:absolute;top:0;z-index:-1"
          v-show="conentBool"
        >{{film.synopsis}}</div>
      </div>

      <!-- 演员 -->

      <div class="actors">
        <div style="margin-bottom:10px; padding: 15px;
  padding-top: 12px;">演职人员</div>
        <Swiper :key="'actors'+film.actors.length">
          <div class="swiper-slide" v-for="(val,key) in film.actors" :key="key">
            <div style="width:85px;height:85px;overflow:hidden;">
              <img :src="val.avatarAddress" alt style="width:100%;margin-top:-20%" />
            </div>
            <span class="actors-name" style="text-align:center">{{val.name}}</span>
            <span class="actors-role actors-name" style="text-align:center">{{val.role}}</span>
          </div>
        </Swiper>
      </div>
      <!-- 局照 -->

      <div style="margin-bottom:30px">
        <div class="photos-title-bar">
          <span class="photos-title-text">剧照</span>
          <span class="photos-to-all">全部({{juzhaoLength}}) &gt;</span>
        </div>

        <juzhao :key="'active'+film.actors.length">
          <div class="swiper-slide" v-for="(val,key) in film.photos" :key="key">
            <div style="width:150px;padding-top:30px;padding-bottom:30px">
              <img class="img" v-lazy="val" alt style="width:100%;height:63px;margin-top:-10px" />
            </div>
          </div>
        </juzhao>
      </div>
      <!-- 購票 -->

      <a
        href="#/film/5266/cinemas"
        class="goupiao"
        style="height: 49px; position: fixed; bottom: 0px; width: 100%;"
      >
        <div class="goSchedule">选座购票</div>
      </a>
      <div class="goSchedule">选座购票</div>
    </div>
  </div>
</template>

<script>
import url from "@/config/uri.js";
import moment from "moment";
import Swiper from "@/components/Swiper.vue";
import juzhao from "@/components/juzhao.vue";
export default {
  data: function() {
    return {
      film: { actors: [] },
      show_title: false,
      filmType: "",
      conentBool: true,
      juzhaoLength:0
    };
  },
  created() {
    this.$store.commit("setBool", false);
    this.$http
      .get(url.getFilmInfo + `?filmId=${this.$route.params.id}`)
      .then(ret => {
          // console.log(ret.data.film.photos)

        if (ret.status === 0) {
          this.film = ret.data.film;
          this.filmType = ret.data.film.filmType.name;
          this.juzhaoLength = ret.data.film.photos == undefined ? 0 : ret.data.film.photos.length
        }
      });
       window.addEventListener('scroll',()=>{
      let top = document.documentElement.scrollTop;
      const oDiv = document.querySelector('.film-header')
      if(top>1){
        this.show_title = true;
        oDiv.style.background = '#fff'
      }else{
        this.show_title = false;
        oDiv.style.background = 'hsla(0, 0%, 100%, 0)';
      }
    })
  },
  beforeDestroy() {
    this.$store.commit("setBool", true);
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    toggle1: function() {
      const oDiv = document.querySelector(".conent");
      const oDiv2 = document.querySelector(".conent2");
      oDiv.style.height =
        oDiv2.clientHeight + "px" == "0px"
          ? "36px"
          : oDiv2.clientHeight - 50 < 36
          ? "50px"
          : oDiv2.clientHeight - 36 + "px";
      this.conentBool = this.conentBool ? false : true;
    }
  },
  filters: {
    premiereAt: function(val) {
      return moment(val * 1000).format("YYYY-MM-DD");
    }
  },
  components: {
    Swiper,
    juzhao
  }
};
</script>

<style scoped lang="scss">
.film-header {
  position: fixed;
  background-color: hsla(0, 0%, 100%, 0);
  // background:red;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100vw;
  height: 44px;
  z-index: 1;
}
.goBack {
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
  img {
    width: 30px;
  }
}
.title {
  font-size: 17px;
  line-height: 44px;
  width: 100vw;
  text-align: center;
  position:fixed;
  top:0;
}
.poster {
  width: 100%;
  background: rgb(249, 249, 249);
  opacity: 1;
  display: block;
  height: 56vw;
  overflow: hidden;
  img {
    width: 100%;
    position: relative;
  }
}
.film-detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
}
.film-grade {
  width: calc(100% - 250px);
  text-align: right;
  color: #ffb232;
  position: absolute;
  right: 10px;
  top: 250px;
}
.toggle {
  text-align: center;
  display: block;
  height: auto;
  width: 20px;
  margin: auto;
  line-height: normal;
}
.hid {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.actors-name {
  padding-top: 10px;
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  height: 18px;
  display: block;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.actors-role {
  font-size: 10px;
  color: #797d82;
  padding: 0;
}
.actors {
  margin-top: 10px;
  background-color: #fff;
}
.photos-title-bar {
  height: 32px;
  width: 100%;
  padding: 15px;
  background: #fff;
  margin-top: 10px;
}
.photos-title-text {
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}
.photos-to-all {
  font-size: 13px;
  color: #797d82;
  float: right;
  margin-right: 30px;
}
.goupiao{
  height: 49px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index:999999;
}
.goSchedule {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;

}
</style>
