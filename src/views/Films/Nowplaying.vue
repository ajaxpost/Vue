<template>
  <div>
    电影院下的正在热播
   

  </div>
</template>
<script>
import url from "@/config/uri";

export default {
  async created() {
    let data = await this.$http.get(url.getNowPlayingFilmList);
    console.log(data);
    
  },
 
};
</script>