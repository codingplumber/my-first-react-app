angular.module('app')
.controller('loginCtrl', function($scope, mainSrvc) {

  $scope.signUp = function(newUserObj) {
    console.log(newUserObj);
    mainSrvc.newUser(newUserObj).then(function(res) {
      console.log(res);
    })
  };

  $scope.login = function(userObj) {
    console.log(userObj);
  };

})
