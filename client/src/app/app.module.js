(function() {
  'use strict';

  angular
    .module('allstate', ['ngTouch', 'restangular', 'ui.router', 'login', 'designer', 'search', 'reports'])
    .config(['$urlRouterProvider', '$stateProvider', routerConfig]);

    function routerConfig($urlRouterProvider, $stateProvider) {
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html'
		});
		$urlRouterProvider.otherwise('/');
	}

})();
