angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

  $scope.test = "hello";

  $scope.quotes = dataService.getQuotes();

  $scope.addData = function() {
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    }
    // console.log('Showing innner val: ', $scope.newQuoteText);
    if(dataService.addData(newQuote))
    {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor= '';
    }
  }

  $scope.removeData = dataService.removeData;

  $scope.deleteMe = function(textToDelete){
    dataService.removeData(textToDelete);
  }

});
