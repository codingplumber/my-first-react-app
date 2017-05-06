angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>{{test}}</h1>',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      template: '<h1>{{test}}</h1>',
      controller: 'aboutCtrl'
    })
    .state('roster', {
      url: '/roster',
      templateUrl: 'roster.html',
      controller: 'rosterCtrl'
    })
    .state('player', {
      url: '/player/:id',
      templateUrl: 'player.html',
      controller: 'playerCtrl'
    })
})
