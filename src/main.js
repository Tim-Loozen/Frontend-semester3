import { createApp } from 'vue'
import {createRouter , createWebHistory} from "vue-router";

import App from './App.vue'
import './assets/main.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/jquery/dist/jquery.min.js'
import '/node_modules/popper.js/dist/popper.js';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'



/*General*/
import register from './components/authentication/register.vue';
import login from './components/authentication/login.vue';
import home from './components/pages/home.vue';

/*Dashboard*/
import Dashboard from './components/dashboard/main.vue';
import settings from "@/components/dashboard/settings.vue";
import admin from "@/components/dashboard/admin/admin.vue";

/*Routes */
import route from "@/components/dashboard/routes/route.vue";
import routesAll from "@/components/dashboard/routes/routes.vue";
import addroute from "@/components/dashboard/routes/new-route.vue";

/*Departs*/





const routes = [
    {path: '/', component: home },
    {path: '/dashboard/admin', component: admin},
    {path: '/login', component: login },
    {path : '/dashboard/add-route', component: addroute},
    {path: '/dashboard/route', component: route},
    {path: '/dashboard/routes', component: routesAll},
    {path: '/dashboard/settings', component: settings},
    {path: '/register', component: register },
    {path: '/dashboard', component: Dashboard }
];

const router = createRouter({
   history: createWebHistory(),
   routes
});


createApp(App)
    .use(router)
    .mount('#app')
