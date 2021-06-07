import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from './components/TheHome'
import TheContact from './components/TheContact'
import TheRegister from './components/TheRegister'
import Products from './components/Products/index.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/',   redirect: '/home'},
    {path: '/home', component: TheHome },
    {path: '/products', component: Products },
    {path: '/contact', component: TheContact },
    {path: '/register', component: TheRegister }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router