import React from 'react';

const Dashboard = React.lazy(() => import('./views/pages/Dashboard/Dashboard'));
const Login = React.lazy(() => import('./views/pages/login/Login'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard',exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/heatmap', exact: true, name: 'Heatmap' },
  { path: '/settings', exact: true, name: 'Settings' },
  { path: '/login', exact: true, name: 'Logout', component: Login },
];

export default routes;
