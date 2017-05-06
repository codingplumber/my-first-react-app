angular.module('app').controller('mainCtrl', function($scope) {

  $scope.currentPage = 'Home';

  $scope.changePage = function(newPage) {
    $scope.currentPage = newPage;
  }
})
