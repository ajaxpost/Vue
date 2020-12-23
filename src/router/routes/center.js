
import Center from '@/views/myCenter/Center';
import Login from '@/components/Login'

let Center_Routes = [{
    path:'/center',
    component:Center
},
    {path:'/login',component:Login},
    {path:'/yu_e',component:()=>import('@/views/myCenter/Yu_e.vue')}
]

export default Center_Routes
