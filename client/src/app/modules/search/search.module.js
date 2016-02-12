(function() {
  'use strict';

  angular
    .module('search', ['ngTouch', 'restangular', 'ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', routerConfig]);
      function routerConfig($urlRouterProvider, $stateProvider) {
        $stateProvider
          .state('search', {
            url: '/search',
            templateUrl: 'app/modules/search/views/search.html'
          });
      }
})();
