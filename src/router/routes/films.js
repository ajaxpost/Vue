
import Films from '@/views/Films/Films'
import ComingSoon from '@/views/Films/ComingSoon';
import Nowplaying from '@/views/Films/Nowplaying';
import Detail from '@/views/Films/Detail'

let Films_Routes = [{
    path:'/films',component:Films,
    children:[
        {path:'nowPlaying',name:'rebo',component:Nowplaying},
        {path:'comingSoon',name:'shangying',component:ComingSoon},
    ],
    redirect:'/films/nowPlaying'
},
    {path:'/film/:id',component:Detail}
]

export default Films_Routes;