import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

import Formulario from './components/components/Formulario.vue';
import MultipleChoice from './components/components/MultipleChoice.vue';

const routes = [
    {path: '/', redirect: '/formulario'},

    {path: '/formulario', component: Formulario},
    {path: '/multipleChoice', component: MultipleChoice},

    {path: '/:pathMatch(.*)*', redirect: '/formulario'},
]

const router = createRouter({
    // your router options here
    // historial de rutas
    history: createWebHashHistory(),
    routes: routes
});

export default router;