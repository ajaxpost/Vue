<template>
    <div>
        <van-loading size="24px" vertical v-show="isLoading">加载中...</van-loading>
    </div>
</template>

<script>
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
export default {
    props:['isLoading'],
    
}
</script>