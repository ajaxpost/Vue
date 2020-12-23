<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Form , Field ,Button , Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    //   `phone=${values.phone}&password=${values.password}&username=张三`
    onSubmit(values) {
        this.$http.post('/v1/login',`phone=${values.phone}&password=${values.password}`).then(ret=>{
            // console.log(this.$route.query===true)
            if( ret.error == 0 ){
                Toast.success(ret.msg)
                this.$store.commit('setToken',ret._token)

                setTimeout(()=>{
                    if( this.$route.query.toUrl ){
                     
                        this.$router.push(this.$route.query.toUrl)
                    }else{
                        this.$router.push('/center')
                    }
                },1000)
            }else{
                Toast.fail('手机号不存在 / 密码错误')
            }
        })
    }
  },
  created(){
      this.$store.commit('setBool',false)
  },
  beforeDestroy(){
      this.$store.commit('setBool',true)
  },
 
};
</script>