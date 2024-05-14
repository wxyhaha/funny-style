import {createRouter,createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name:'home',
        component: () => import('../pages/homePage.vue'),
    },
    {
        path: '/3dCard',
        name:'3dCard',
        component: () => import('../pages/3dCard.vue'),
    },
    {
        path: '/simButton',
        name:'simButton',
        component: () => import('../pages/simButton.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
