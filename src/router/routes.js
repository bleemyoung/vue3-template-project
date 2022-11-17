import Register from '@/components/registerUser.vue'
import Login from '@/components/loginUser.vue'

const routes = [{
        name: 'loginUser',
        path: '/loginUser',
        component: Login
    },
    {
        name: 'registerUser',
        path: '/registerUser',
        component: Register
    }
];
export default routes