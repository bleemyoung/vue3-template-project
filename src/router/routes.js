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
        path: '/',
        name: 'Home',
        // 懒加载路由
        component: () =>
            import ('@/views/home/Home.vue'),
    },
    {
        path: '/menu',
        name: 'Menu',
        // 懒加载路由
        component: () =>
            import ('@/views/menu/Menu.vue'),
    }
];
export default routes