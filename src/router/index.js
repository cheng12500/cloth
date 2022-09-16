import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        meta: {
            hidden: true,
            keepAlive: true,
            isrefersh: true
        },
        component: () =>
            import ('../view/home/Home')
    },
    {
        path: '/category',
        component: () =>
            import ('../view/category/Category')
    },
    {
        path: '/shopcart',
        component: () =>
            import ('../view/shopcart/ShopCart')
    },
    {
        path: '/profile',
        component: () =>
            import ('../view/profile/Profile')
    },
    {
        path: '/detail/:id',
        component: () =>
            import ('../view/detail/Detail')
    },
    {
        path: '/category/goodList',
        meta: {
            keepAlive: true,
            isrefersh: true
        },
        component: () =>
            import ('../view/category/list/goodList')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import ('../view/not-found/not-found.vue')
    }
]

const router = new createRouter({
    routes,
    history: routerHistory
})



export default router