angular.module('myApp')
.controller('homeCtrl', function($scope, mainSrvc) {

  $scope.test = 'home';

  $scope.getPlanets = function() {
    mainSrvc.getPlanets().then(function(res) {
      $scope.planets = res;
    });
  };
  $scope.getPlanets();



});
