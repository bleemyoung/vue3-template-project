import Register from '@/components/register.vue'
import Login from '@/components/login.vue'

const routes = [{
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    }
];
export default routes