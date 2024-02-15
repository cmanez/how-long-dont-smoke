import MyAbout from '@/components/views/MyAbout.vue'
import MyHome from '@/components/views/MyHome.vue'


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
        

    ]
})
export default router