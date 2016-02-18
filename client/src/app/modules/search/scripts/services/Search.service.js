(function () { 
	'use strict';
	
	angular.module('search').factory('SearchService', ['$q', '$http', impl]);

	function impl($q, $http){
		var search = function(params){
			return $q(function(resolve, reject){
				$http.get('http://localhost:3003/api/v1/waspackage', params || {}).then(function(response){
						resolve(response.data);
					}, reject)
			});
		};
		return {
			search: search
		}
	}
})();