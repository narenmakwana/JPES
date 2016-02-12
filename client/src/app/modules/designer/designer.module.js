(function() {
  'use strict';

  angular
    .module('designer', ['ngTouch', 'restangular', 'ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', routerConfig]);
      function routerConfig($urlRouterProvider, $stateProvider) {
        $stateProvider
          .state('designer', {
            url: '/designer',
            templateUrl: 'app/modules/designer/views/designer.html'
          });
      }
})();
