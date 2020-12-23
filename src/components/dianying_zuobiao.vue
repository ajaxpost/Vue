<template>
    <div class="zuobiao" @click="fun">
        电影
    </div>
</template>

<script>
export default {
    props:['buy'],
    created(){
        // console.log(this.buy);
        
    },
    methods:{
        fun:function(){
            this.$router.push('/city')
        }
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