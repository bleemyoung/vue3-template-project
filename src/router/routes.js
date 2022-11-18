const routes = [{
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
    },
    {
        path: '/login',
        name: 'Login',
        // 懒加载路由
        component: () =>
            import ('@/views/login/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        // 懒加载路由
        component: () =>
            import ('@/views/register/Register.vue'),
    }
];
export default routes