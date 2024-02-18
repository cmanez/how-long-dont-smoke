import MyAbout from '@/components/views/MyAbout.vue'
import MyHome from '@/components/views/MyHome.vue'
import MyLinks from '@/components/views/MyLinks.vue'
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/home',
            name: 'home',
            component: MyHome,
            meta: {
                layout: 'MainLayout',
            },
        },
        {
            path: '/',
            name: 'about',
            component: MyAbout,
            meta: {
                layout: 'MainLayout',
            },
        },
        {
            path: '/about',
            name: 'links',
            component: MyLinks,
            meta: {
                layout: 'MainLayout',
            },
        },
        
    ]
})
export default router