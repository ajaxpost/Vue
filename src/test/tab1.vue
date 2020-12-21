<template>
    <div>
      
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    created(){
        // this.$store.commit('test')
        console.log(this.test)
        for(var i = 0 ; i<= 5; i++){
            console.log(i)
        }
        console.log(8)
    },
    methods:{
        ...mapMutations(['test'])
    }
  
    
}
</script>