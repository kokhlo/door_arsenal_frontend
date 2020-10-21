const routes = [
  {
    path: '/',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/all',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/all.vue') },
    ],
  },
  {
    path: '/internal',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Internal.vue') },
    ],
  },
  {
    path: '/external',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/External.vue') },
    ],
  },
  {
    path: '/furniture',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Furniture.vue') },
    ],
  },
  {
    path: '/sales',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Sales.vue') },
    ],
  },
  {
    path: '/cart',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cart.vue') },
    ],
  },
  {
    path: '/guarantee',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Guarantee.vue') },
    ],
  },
  {
    path: '/product/:id',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/product/_id.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
