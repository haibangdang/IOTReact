import Dashboard from '../components/Dashboard';
export const clientRoutes = [
    {
        path: '/',
        component: Dashboard,
        exact: true,
    },
    {
        path: '/device/:deviceId',
        component: Dashboard,
        exact: false,
    },
];
