import VueRouter from 'vue-router'
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

export default new VueRouter({
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
