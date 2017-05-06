angular.module('app')
.service('mainSrvc', function($http) {

  const baseUrl = 'http://localhost:3000'

  this.newUser = function(newUserObj) {
    return $http({
      method: 'POST',
      url: baseUrl + '/newuser',
      data: {newUserObj} //data is the body
    }).then(function(res) {
      return res; //without this return the .then in the loginCtrl wont get hit
    })
  };

});
