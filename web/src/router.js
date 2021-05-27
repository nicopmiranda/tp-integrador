import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from './components/TheHome'
import TheContact from './components/TheContact'
import TheRegister from './components/TheRegister'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: TheHome
    },
    {
        path: '/inicio',
        redirect: '/home'
    },
    {
        path: '/contact',
        component: TheContact
    },
    {
        path: '/contacto',
        redirect: '/contact'
    },
    {
        path: '/register',
        component: TheRegister
    },
    {
        path: '/registro',
        redirect: '/register'
    },
    {
        path: '/signup',
        redirect: '/register'
    },
    {
        path: '/login',
        redirect: '/register'
    },
    {
        path: '/signin',
        redirect: '/register'
    },
    {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router