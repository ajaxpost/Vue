<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import url from '@/config/uri'
import Footer from '@/components/Footer'
export default {
    created(){
      // this.$http.get(url.getComingSoonFilmList).then(ret=>{console.log(ret)})
    
      
    },
    components:{
      Footer,

    }
}
</script>

<style lang="scss">
     body{
        height:5000px;
    }
</style>
