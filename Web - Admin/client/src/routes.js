import React from 'react';

const Dashboard = React.lazy(() => import('./views/pages/Dashboard/Dashboard'));
const Heatmap = React.lazy(() => import('./views/pages/Heatmap/Heatmap'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const StallHeatmap = React.lazy(() => import('./views/pages/StallHeatmap/StallBarChart.js'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/heatmap', exact: true, name: 'Heatmap', component: Heatmap },
  { path: '/StallHeatmap', exact: true, name: 'StallHeatmap', component: StallHeatmap },
  { path: '/settings', exact: true, name: 'Settings' },
  { path: '/login', exact: true, name: 'Logout', component: Login },
];

export default routes;
