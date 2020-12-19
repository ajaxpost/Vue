<template>
    <div>
    <Header/>

        电影院首页
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/Header'

export default {
    components:{
        Header,
        
    },
    
}
</script>