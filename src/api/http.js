import axios from 'axios';
import store from '../store/index'
import { log } from 'util';
axios.interceptors.response.use(ret => {
    return ret.data || ret;
})

axios.interceptors.request.use((config)=>{
    let jwt = localStorage.getItem("token");
    if( jwt ){
        config.headers = {
            Authorization : jwt
        }
        

    }
    
    return config
})

export default axios;