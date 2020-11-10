import Vue from 'vue' // 引入vue
import Router from 'vue-router'// 引入路由
import home from '../components/page/Home'
import about from '../components/page/About'
import login from '../components/page/Login'
Vue.use(Router) // vue使用路由
const routes = [
    // {
    //     path: '/' ,
    //     redirect: home
    // } ,
    {
        path: '/home' ,
        name: 'home' ,
        component: home
    } ,
    {
        path: '/about' ,
        name: 'about' ,
        component: about
    } ,
    {
        path: '/login' ,
        name: 'login' ,
        component: login
    }
] ;
export default new Router({
    routes
})

