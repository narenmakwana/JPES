(function() {
  'use strict';

  angular
    .module('reports', ['ngTouch', 'restangular', 'ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', routerConfig]);
      function routerConfig($urlRouterProvider, $stateProvider) {
        $stateProvider
          .state('reports', {
            url: '/reports',
            templateUrl: 'app/modules/reports/views/reports.html'
          });
      }
})();
