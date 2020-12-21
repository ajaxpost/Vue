<template>
    <div v-show="buy" class="zuobiao">
        电影
    </div>
</template>

<script>
export default {
    props:['buy'],
    created(){
        // console.log(this.buy);
        
    }
}
</script>

<style scoped>
 .zuobiao{
     position:fixed;
        z-index:9999;
        text-align:center;
        width:100%;
        
 }
</style>