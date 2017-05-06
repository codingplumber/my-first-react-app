angular.module('app')
.directive('hoverDirective', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attributes) {

      element.on('mouseover', function() {
        element.css('color', 'blue');
      })

      element.on('mouseleave', function() {
        element.css('color', 'black');
      })
    }
  }

})
