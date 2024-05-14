import {createRouter,createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/3dCard',
    },
    {
        path: '/3dCard',
        name:'3dCard',
        component: () => import('../pages/3dCard.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
