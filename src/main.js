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

import register from '@/components/authentication/register.vue';
import login from '@/components/authentication/login.vue';
import home from '@/components/pages/home.vue';
import MFA from "@/components/authentication/MFA.vue";
import EnableMFA from "@/components/dashboard/enableMFA.vue";
/*Users*/
import Users from "@/components/dashboard/users/users.vue";

/*Dashboard*/
import Dashboard from '@/components/dashboard/main.vue';
import settings from "@/components/dashboard/settings.vue";
import admin from "@/components/dashboard/admin/admin.vue";

/*Routes */
import route from "@/components/dashboard/routes/route.vue";
import routesAll from "@/components/dashboard/routes/routes.vue";
import routeCreates from "@/components/dashboard/routes/RoutesCreate.vue";
import earnings from "@/components/dashboard/earnings/earnings.vue";
import statistics from "@/components/dashboard/statistics/statistics.vue";
import RouteRequests from "@/components/dashboard/postRequests/postRequests.vue";
import PostRequestsCompany from "@/components/dashboard/postRequests/postRequestsCompany.vue";
import history from "@/components/dashboard/routes/history.vue";
/*Departs*/

/*Post office */
import postCompanies from "@/components/dashboard/postCompanies/postCompanies.vue";
import createPostCompanies from "@/components/dashboard/postCompanies/postCompaniesCreate.vue";
import createPostCompanyAccount from "@/components/dashboard/postCompanies/account/PostCompanyAccountCreate.vue";
import PostCompaniesAccount from "@/components/dashboard/postCompanies/account/PostCompaniesAccount.vue";
import User from "@/utils/user";

const routes = [
    {path: '/', component: home },
    {path: '/MFA', component: MFA },
    {path: '/dashboard/admin', component: admin},
    {path: '/login', component: login },
    {path: '/dashboard/routes/create', component: routeCreates},
    {path: '/dashboard/route/:id', component: route, name: 'route' },
    {path: '/dashboard/routes', component: routesAll},
    {path: '/dashboard/routes/history', component: history},
    {path: '/dashboard/users', component: Users},
    {path: '/dashboard/routes/requests', component: RouteRequests},
    {path: '/dashboard/post-companies/routes/requests', component: PostRequestsCompany},
    {path: '/dashboard/user/settings/:id', component: settings, name: 'settings'},
    {path: '/dashboard/earnings', component: earnings},
    {path: '/dashboard/statistics', component: statistics},
    {path: '/dashboard/post-companies', component: postCompanies},
    {path: '/dashboard/post-companies/accounts', component: PostCompaniesAccount},
    {path: '/dashboard/post-companies/create', component: createPostCompanies},
    {path: '/dashboard/post-companies/account/create/:id', component: createPostCompanyAccount, name: 'createPostCompanyAccount'},
    {path: '/register', component: register },
    {path: '/dashboard', component: Dashboard },
    {path: '/dashboard/personal/settings', component: EnableMFA}
];

const router = createRouter({
   history: createWebHistory(),
   routes
});


createApp(App)
    .use(router)
    .mount('#app')
