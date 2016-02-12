(function() {
  'use strict';

  angular
    .module('login', ['ngTouch', 'restangular', 'ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', routerConfig]);
      function routerConfig($urlRouterProvider, $stateProvider) {
        $stateProvider
          .state('login', {
            url: '/login',
            templateUrl: 'app/modules/login/views/login.html',
            application: {
              hideNav: true
            }
          })
          .state('logout', {
            url: '/logout',
            onEnter: ['AuthService', '$state', function(AuthService, $state){
              AuthService.logout();
              $state.go('login'); 
            }]
          });
      }
})();
