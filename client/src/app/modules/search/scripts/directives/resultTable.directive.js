(function() {
  'use strict';

  angular
    .module('search')
    .directive('resultTable', [directive]);

  function directive() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '=',
        onRowClick: '&'
      },
      templateUrl: '/app/modules/search/views/resultTable.html',
      link: function(scope){
        var itemsDereg = scope.$watch('data', function(newItems){
          if(angular.isArray(newItems)){
            scope.data = newItems;
          }
          else {
            scope.data = [];
          }
        });

        scope._onClick = function(item){
          if(angular.isFunction(scope.onRowClick)){
            scope.onRowClick()(item);
          }
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
