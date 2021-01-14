const routes = [{
  path: '/',
  component: '../layouts/index',
  routes: [{
      path: '/',
      component: './home'
    },
    {
      path: '/home',
      component: './home'
    },
    {
      path: '/test',
      component: './test'
    }
  ]
}]

module.exports = routes;
