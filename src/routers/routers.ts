import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/teste',
        name: 'Teste',
        component: () => import('../views/Teste.vue')
    },
    {
        path:'/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router