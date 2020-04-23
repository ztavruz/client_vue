import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'guest',
        meta: {
            layout: 'empty',
            levelAccess: [
                ""
            ],
        },
        component: () => import('../views/guest/Guest')
    },
    {
        path: '/login',
        name: "login",
        meta: {
            layout: 'empty',
            levelAccess: [""]
        },
        component: () => import('../views/guest/Login')
    },
    {
        path: '/register',
        name: "register",
        meta: {
            layout: 'empty',
            levelAccess: [""],
        },
        component: () => import('../views/guest/Register')
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            layout: 'main',
            levelAccess: ["C"],
        },
        component: () => import('../views/main/Main')
    },
    {
        path: '/detail/:id',
        name: "detail-record",
        meta: {layout: 'main',
            levelAccess: ["C"],
        },
        component: () => import('../views/Detail')
    },
    {
        path: '/account',
        name: "account",
        meta: {layout: 'empty',
            levelAccess: ["C"],
        },
        component: () => import('../views/main/Account')
    },
    {
        path: '/spasibo',
        name: "spasibo",
        meta: {
            layout: 'empty',
            levelAccess: ["C"],
        },
        component: () => import('../views/main/Spasibo')
    },
    {
        path: '/stopped',
        name: "stopped",
        meta: {layout: 'empty',
            levelAccess: [""],
        },
        component: () => import('../views/guest/Stopped')
    },
    {
        path: '/admin',
        name: "admin",
        meta: {layout: 'admin',
            levelAccess: [""],
        },
        component: () => import('../views/admin/Admin')
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

let guard

router.beforeEach((to, from, next) => {
    const pageAccess = to.meta.levelAccess;
    const userData = JSON.parse(localStorage.getItem("userData"));
    let userAccess;
    if(userData !== null){
         userAccess = userData.status;
    }else{
        userAccess = "C";
    }

    pageAccess.forEach((item)=>{
        if (userAccess !== item) {
            console.log("права юзера: ", userAccess);
            console.log("запрет доступа для: ",item);
            next();
        } else{
            console.log("нет доступа на страницу");
            next("/stopped");
        }
    });

})




export default router
