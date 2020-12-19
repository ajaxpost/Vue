<template>
    <div>
        电影院下的即将上映
    </div>
</template>

<script>
    import url from '@/config/uri'
export default {
   async created(){
      let data =  await this.$http.get(url.getComingSoonFilmList)
      console.log(data);
      
    }
}
</script>