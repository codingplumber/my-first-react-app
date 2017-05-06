angular.module('app')
.controller('productsCtrl', function($scope, mainSrvc) {

  $scope.products = [{name: 'bicycle', desc: 'two wheels'}, {name: 'tv', desc: '17 inch'}, {name: 'a/c unit', desc: 'quiet'}, {name: 'full-stack js course', desc: '13 weeks'}, {name: 'tea kettle', desc: 'antique'}];

})
