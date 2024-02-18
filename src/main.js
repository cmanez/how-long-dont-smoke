import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MainLayout from '@/components/layouts/MainLayout.vue'
import App from './App.vue'
import router from '@/router/router'
import '@/style.scss'
const app = createApp(App)
const pinia = createPinia()


app
.use(pinia)
.use(router)
.component('MainLayout', MainLayout)
.mount('#app')

