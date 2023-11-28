import { createHashRouter, Navigate } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Account from '@/pages/account'
import History from '@/pages/history'

// 全局路由
export const globalRouters = createHashRouter([
    // 对精确匹配"/login"，跳转Login页面
    {
        path: '/login',
        element: <Login />,
    },
    // 精确匹配"/home"，跳转Home页面
    {
        path: '/home',
        element: <Home />,
    },
    // 精确匹配"/account"，跳转Account页面
    {
        path: '/account',
        element: <Account />,
    },
    // history
    {
        path: '/history',
        element: <History />,
    },
    // 如果URL没有"#路由"，跳转Home页面
    {
        path: '/',
        element: <Home />,
    },
    // 未匹配，，跳转Login页面
    {
        path: '*',
        element: <Navigate to="/home" />,
    },
])
