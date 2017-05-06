angular.module('app')
.directive('loginForm', function() {
  return {
    restrict: 'AE',
    template: 'loginForm.html',
    scope: {
      title: '@',
      userEmail: '=',
      buttonText: '@'
    }
  }
})
