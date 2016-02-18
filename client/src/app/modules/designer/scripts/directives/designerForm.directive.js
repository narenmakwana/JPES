(function() {
  'use strict';

  angular
    .module('designer')
    .directive('designerForm', ['OptionsService', directive]);

  function directive(OptionsService) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        formData: '=',
        formConfig: '=',
        onSubmit: '&',
        onCancel: '&'
      },
      templateUrl: '/app/modules/designer/views/designerForm.html',
      link: function(scope){
        scope.OptionsService = OptionsService;
        var dataDereg = scope.$watch('formData', function(newItems){
          if(angular.isObject(newItems)){
            scope.formData = newItems;
          }
          else {
            scope.formData = {};
          }
        });
        var configDereg = scope.$watch('formConfig', function(newItems){
          if(angular.isObject(newItems)){
            scope.formConfig = newItems;
          }
          else {
            scope.formConfig = {};
          }
        });

        scope._onSubmit = function(valid){
          var func = scope.onSubmit();
          if(angular.isFunction(func)){
            func(scope.formConfig.type, scope.formData);
          }
        };
        scope._onCancel = function(){
          var func = scope.onCancel();
          if(angular.isFunction(func)){
            func();
          }
        };
        scope.$on('$destroy', function(){
          if(angular.isFunction(dataDereg)){
            dataDereg();
          }
          if(angular.isFunction(configDereg)){
            configDereg();
          }
        });
      }
    }
  }

})();
