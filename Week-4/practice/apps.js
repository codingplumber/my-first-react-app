angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './home/home.html',
        controller: 'homeCtrl'
      })
      .state('display', {
        url: '/display/:name',
        templateUrl: './display/display.html',
        controller: 'displayCtrl'
      })


});
