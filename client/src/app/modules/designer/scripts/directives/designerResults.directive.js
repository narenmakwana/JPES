(function() {
  'use strict';

  angular
    .module('designer')
    .directive('designerResults', [directive]);

  function directive() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '=designerData'
      },
      templateUrl: '/app/modules/designer/views/designerResults.html',
      link: function(scope){
        var dataDereg = scope.$watch('data', function(newItems){
          if(angular.isObject(newItems)){
            scope.data = newItems;
          }
          else {
            scope.data = {};
          }
        });
        scope.$on('$destroy', function(){
          if(angular.isFunction(dataDereg)){
            dataDereg();
          }
        });
      }
    }
  }

})();
