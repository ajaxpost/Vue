<template>
    <div>
        电影详情页
    </div>
</template>

<script>
export default {
    created(){
        this.$store.commit('setBool',false)
      
    },
    beforeDestroy(){
        this.$store.commit('setBool',true)
        
    }
}
</script>
