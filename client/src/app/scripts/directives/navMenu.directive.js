(function() {
  'use strict';

  angular
    .module('allstate')
    .directive('navMenu', [directive]);

  function directive() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        menuItems: '=',
        isOpen: '='
      },
      templateUrl: '/app/views/navMenu.html',
      link: function(scope){
        var itemsDereg = scope.$watch('menuItems', function(newItems){
          if(angular.isArray(newItems)){
            scope.menuItems = newItems;
          }
        });

        scope._onClick = function(item){
          if(angular.isFunction(item.onClick)){
            item.onClick();
          }
          scope.isOpen = false;
        };

        scope.$on('$destroy', function(){
          if(angular.isFunction(itemsDereg)){
            itemsDereg();
          }
        });
      }
    }
  }

})();
