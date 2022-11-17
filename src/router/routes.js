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
    },
    {
        path: '/home',
        name: 'home',
        // 懒加载路由
        component: () =>
            import ('@/views/home/Home.vue'),
    },
];
export default routes