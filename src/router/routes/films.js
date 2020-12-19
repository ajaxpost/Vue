
import Films from '@/views/Films/Films'
import ComingSoon from '@/views/Films/ComingSoon';
import Nowplaying from '@/views/Films/Nowplaying';

let Films_Routes = {
    path:'/films',component:Films,
    children:[
        {path:'nowPlaying',name:'rebo',component:Nowplaying},
        {path:'comingSoon',name:'shangying',component:ComingSoon},
    ],
    redirect:'/films/nowPlaying'
}

export default Films_Routes;