angular.module('myApp')
.service('mainSrvc', function($http) {

  baseUrl = 'http://swapi.co/api/';

  this.getPlanets = function() {
    return $http({
      method: 'GET',
      url: baseUrl + 'planets'
    }).then(function(res) {
      return res.data.results;
    });
  };






});
