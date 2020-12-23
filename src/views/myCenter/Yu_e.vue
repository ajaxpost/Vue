<template>
    <div>
        余额页面
    </div>
</template>

<script>
export default {
    created(){
        this.$store.commit('setBool',false)
        if( !this.$store.state.token ){
            this.$router.push({ path: "/login", query: { toUrl: "/yu_e" } });
        }
    },
    beforeDestroy(){
        this.$store.commit('setBool',true)
    }
}
</script>