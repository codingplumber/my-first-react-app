angular.module('myApp')
.controller('displayCtrl', function($scope, mainSrvc, $stateParams) {

  var getSinglePlanet = function() {
    mainSrvc.getPlanets().then(function(res) {
      $scope.planets = res;

      for (var i = 0; i < res.length; i++) {
        if (res[i].name === $stateParams.name) {
          $scope.singlePlanet = res[i];
        }
      }
    });
  };
  getSinglePlanet();




});
