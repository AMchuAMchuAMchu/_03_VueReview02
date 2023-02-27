import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

const router = new VueRouter({
    routes:[
        {
            path:'/About',
            component:About
        },
        {
            path:'/Home',
            component:Home,
            children:[
                {
                    path:'News',
                    component:News
                },
                {
                    path:'Message',
                    component:Message,
                    children:[
                        {
                            path:'Detail',
                            component:Detail,
                            props({query:{id,title}}){
                                return {id,title}
                            }
                        }
                    ]
                },
            ]
        },
    ]
})

router.beforeEach((to,from,next)=>{
    if (to.path === '/Home/Message'||to.path === '/Home/News'){
        if (localStorage.getItem('school')==='atguigu'){
            next()
        }else{
            alert('😅😅学校名不对!!')
        }
    }else{
        next()
    }
})

export default router

