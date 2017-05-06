angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: './views/login.html'
    }),
    .state('products', {
      url: '/products',
      templateUrl: './views/products.html',
      controller: productsCtrl
    }),
    .state('details', {
      url: '/details/:id',
      parent: 'products', //makes this state a sub route of products above
      templateUrl: './views/productDetails.html',
      controller: productDetailsCtrl
    });




})
