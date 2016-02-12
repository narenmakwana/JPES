(function () { 
	'use strict';
	
	angular.module('allstate').factory('AuthService', ['$q', '$timeout', impl]);

	function impl($q, $timeout){
		var _authStatus = {
			isAuthorized: false
		};
		var isAuthorized = function(){
			return _authStatus.isAuthorized
		};
		var _setAuthorized = function(isAuthorized){
			_authStatus.isAuthorized = !!isAuthorized;
		};
		var setUnauthorized = function(){
			_setAuthorized(false);
		};
		var authenticate = function(/*username, password*/){
			return $q(function(resolve/*, reject*/){
				$timeout(function(){
					resolve();
					_setAuthorized(true);
				}, 1000);
			});
		};

		return {
			isAuthorized: isAuthorized,
			authenticate: authenticate,
			logout: setUnauthorized
		}
	}
})();