import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from './components/TheHome'
import TheContact from './components/TheContact'
import TheRegister from './components/TheRegister'
import CheckOut from './components/CheckOut/index.vue'
import Products from './components/Products/index.vue'
import TheCart from './components/TheCart'
import TheConfirmationPage from './components/TheConfirmationPage'

import ProductDetail from './components/ProductDetail'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: TheHome },
    { path: '/home/:message', component: TheHome, props: true },
    { path: '/products', component: Products },
    {path: '/products/:searchedValue', component: Products, props: true },
    { path: '/contact', component: TheContact },
    { path: '/register', component: TheRegister },
    { path: '/register/:goTo', component: TheRegister, props: true },
    { path: '/cart', component: TheCart },
    { path: '/product-details/:productId', component: ProductDetail, props: true},
    { path: '/checkout', component: CheckOut },
    { path: '/confirmation-page', component: TheConfirmationPage },
    { path: '*', redirect: '/home' }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router