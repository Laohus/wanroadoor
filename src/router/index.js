import Vue from 'vue'
import Router from  'vue-router'
import layout from '@/layout/index'
import {UserState} from "@/api/user";

Vue.use(Router)

const router =  new Router({
    routes: [
        {
            path : '/',
            name: 'login',
            hidden: true,
            component: () =>
                import ('@/page/login/login'),
        },
        {
            path : '/login',
            name: 'login2',
            hidden: true,
            component: () =>
                import ('@/page/login/login'),
        },
        {
            path : '/message',
            component: layout,
            hidden: true,
            message:true,
            children:[
                {
                    path : '/message',
                    component: () => import ('@/page/home/home'),
                    name:"消息中心",
                }
            ]
        },
        {
            path : '/Notification',
            component: layout,
            hidden: true,
            message:true,
            children:[
                {
                    path : '/Notification',
                    component: () => import ('@/page/home/home'),
                    name:"任务中心",
                }
            ]
        },
        {
            path : '/personalData',
            component: layout,
            hidden: true,
            message:true,
            children:[
                {
                    path : '/personalData',
                    name:"admin",
                    id:"3",
                    hidden: true,
                },
                {
                    path : '/personal',
                    component: () => import ('@/page/home/home'),
                    name:"个人信息",
                    id:"3-1",
                },
                {
                    path : '/Logout',
                    component: () => import ('@/page/home/home'),
                    name:"退出系统",
                    id:"3-2",
                },
            ]
        },
        {
            path : '/home',
            component: layout,
            hidden: true,
            // redirect: '/home',
            children:[
                {
                    path : '/home',
                    component: () => import ('@/page/home/home'),
                    name:"主页",
                    id:"1",
                    meta: { title: '主页', icon: 'el-icon-house', affix: true }
                }
            ]
        },
        {
            path : '/user',
            component: layout,
            children:[
                {
                    path : '/user',
                    component: () => import ('@/page/user/user'),
                    name:"用户",
                    id:"2",
                    meta: { title: '用户', icon: 'el-icon-user-solid', affix: true }
                }
            ]
        },
        {
            path : '/report',
            component: layout,
            children:[
                {
                    path : '/report',
                    component: () => import ('@/page/user/user'),
                    name:"报告",
                    id:"3",
                    meta: { title: '报告', icon: 'el-icon-document', affix: true }
                }
            ]
        },
        {
            path : '/novel',
            component: layout,
            children:[
                {
                    path : '/novel',
                    component: () => import ('@/page/user/user'),
                    name:"小说",
                    id:"4",
                    meta: { title: '小说', icon: 'el-icon-reading', affix: true }
                }
            ]
        },
        {
            path : '/performance',
            component: layout,
            children:[
                {
                    path : '/performance',
                    name:"性能自动化",
                    id:"5",
                    hidden: true,
                    meta: { title: '性能自动化', icon: 'el-icon-cpu', affix: true }
                },
                {
                    path : '/upload',
                    component: () => import ('@/page/performance/upload'),
                    name:"脚本上传",
                    id:"5-1",
                    meta: { title: '脚本上传', affix: true }
                },
                {
                    path : '/scenarioRun',
                    component: () => import ('@/page/performance/scenarioRun'),
                    name:"场景执行",
                    id:"5-2",
                    meta: { title: '场景执行', affix: true }
                },
            ]
        },
        {
            path : '/interface',
            component: layout,
            children:[
                {
                    path : '/interface',
                    name:"接口自动化",
                    id:"6",
                    hidden: true,
                    meta: { title: '接口自动化', icon: 'el-icon-office-building', affix: true }
                },
                {
                    path : '/single',
                    component: () => import ('@/page/interface/single'),
                    name:"接口定义",
                    id:"6-1",
                    meta: { title: '接口定义', affix: true }
                },
                {
                    path : '/automation',
                    component: () => import ('@/page/interface/automation'),
                    name:"自动化",
                    id:"6-2",
                    meta: { title: '自动化', affix: true }
                }
            ]
        },
        {
            path: '/404',
            component: () =>
                import ('@/page/error/404'),
            hidden: true
        },
    ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/') {
        next();
    } else {
        const date = new Date();
        const TimeNow = date.getTime()
        const token = localStorage.getItem('Authorization');
        const Timeout = localStorage.getItem('Timeout');
        if (token === null || token === '') {
            localStorage.removeItem('Authorization');
            localStorage.removeItem('Timeout');
            next('/login');
        }
        if(Timeout < TimeNow){
            localStorage.removeItem('Authorization');
            localStorage.removeItem('Timeout');
            next('/login');
        }
        if(token != null){
            UserState().then(response => {
                if(response.code===0) {
                    next()
                }else {
                    localStorage.removeItem('Authorization');
                    localStorage.removeItem('Timeout');
                    next('/login');
                }
            })
        }
    }
});

export default router;