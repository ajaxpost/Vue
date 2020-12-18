<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import url from '@/config/uri'
export default {
    created(){
      this.$http.get(url.getComingSoonFilmList).then(ret=>{console.log(ret)})
      
    }
}
</script>

<style lang="scss">

</style>
