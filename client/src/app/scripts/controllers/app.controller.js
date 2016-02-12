(function() {
  'use strict';

  angular
    .module('allstate')
    .controller('AppCtrl', ['$rootScope', '$scope', 'AuthService', '$state', controller]);

  function controller($rootScope, $scope, AuthService, $state) {
	var vm = this;
	//Nav Menu
	var _createNavItem = function(label, iconClass, onClick){
		return {
			onClick: onClick,
			label: label,
			iconClass: iconClass
		}
	};
	vm.nav = {
		navMenuOpen: false,
		navMenuItems: [
			_createNavItem('Home', 'glyphicon glyphicon-home', function(){
				$state.go('home');
			}),
			_createNavItem('Search', 'glyphicon glyphicon-search', function(){
				$state.go('search');
			}),
			_createNavItem('Reports', 'glyphicon glyphicon-stats', function(){
				$state.go('reports');
			}),
			_createNavItem('Designer', 'glyphicon glyphicon-flash', function(){
				$state.go('designer');
			}),
			_createNavItem('Logout', 'glyphicon glyphicon-log-out', function(){
				$state.go('logout');
			})
		],
		navOpen: false,
		showNavBar: false
	};
	vm.onNavClick = function(){
		vm.nav.navOpen = !vm.nav.navOpen;
	};

	//State change checks
    var degregister = $rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){ 
			//Check Auth
			if(AuthService.isAuthorized() === false && toState.name !== 'login'){
				//Redirect to login screen
				var params = {
					redirect: (fromState.name === 'login')?null:fromState.name,
					redirectParams: fromParams
				};
				$state.go('login', params);
				event.preventDefault(); 
			}
			//Check state props
			if(toState.application && toState.application.hideNav === true || !fromState.name){
				vm.nav.showNavBar = false;
			}
			else {
				vm.nav.showNavBar = true;
			}
		}
	);

	$scope.$on('$destroy', function(){ 
		if(angular.isFunction(degregister)){
			degregister();
		}
	});
  }

})();
