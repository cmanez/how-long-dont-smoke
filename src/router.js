import MyView from '@/components/MyView.vue'
import MyAbout from '@/components/MyAbout.vue'
import MyHome from '@/components/MyHome.vue'


import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'home',
            component: MyHome,
            meta: {
                layout: 'MainLayout',
            },
        },
        {
            path: '/about',
            name: 'about',
            component: MyAbout,
            meta: {
                layout: 'MainLayout',
            },
        },
        {
            path: '/view',
            name: 'view',
            component: MyView,
            meta: {
                layout: 'MainLayout',
            },
        }

    ]
})
export default router