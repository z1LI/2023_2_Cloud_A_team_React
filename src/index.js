import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
// import App from '@/pages/home'

// global
import '@/common/styles/frame.styl'

import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ConfigProvider>
        <RouterProvider router={globalRouters} />
    </ConfigProvider>
    );

