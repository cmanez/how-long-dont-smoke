import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MainLayout from '@/components/layouts/MainLayout.vue'
import components from '@/components/UI/ui.js'
import App from './App.vue'
import router from '@/router/router'
import '@/style.scss'
const app = createApp(App)
const pinia = createPinia()
components.forEach(component => {
    app.component(component.name, component)
    
});

app
.use(pinia)
.use(router)
.component('MainLayout', MainLayout)
.mount('#app')

