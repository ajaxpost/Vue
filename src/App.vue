<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$store.state.bool"/>
  </div>
</template>

<script>


import Footer from '@/components/Footer'
export default {
    data:function(){
      return {
        
      }
    },
    components:{
      Footer,
    },
   
}
</script>

