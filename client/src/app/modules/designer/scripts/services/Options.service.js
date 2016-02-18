(function () { 
	'use strict';
	
	angular.module('designer').factory('OptionsService', [impl]);

	function impl(){
		var getHostNames = function(){
			return ['lxv0039', 'lxv0040', 'lxv0041', 'lxv0042', 'lxv0043', 'lxv0044', 'lxv0045'];
		};

		var getEnvTypes = function(){
			return ['sb', 'dv', 'et', 'ft', 'rt', 'it', 'st', 'pt', 'pp', 'hf', 'sc', 'pd', 'pb'];
		};

		var getInstallTypes = function(type){
			if(type === 'node'){
				return ['wsdm', 'pp', 'sp', 'sa', 'wssa'];
			}
			else if(type === 'dmgr'){
				return ['pdm', 'dm', 'bp', 'wsdm', 'lc', 'lb', 'ln'];
			}
			return ['pdm', 'dm', 'bp', 'wsdm', 'pp', 'sp', 'sa', 'wssa', 'lc', 'lb', 'ln'];
		};

		var getVersions = function(){
			return [61029, 61033, 61035, 61037, 61039, 7007, 70013, 70015, 70017, 70019, 70021, 70025, 8001, 8002, 8003, 8004, 8005, 8006, 8500, 8501, 8502];
		};

		var getRunAsUsers = function(){
			return ['was', 'kiwassb'];
		};

		var getDomains = function(){
			return ['tst', 'mstst', 'sa-tst', 'sa-tad', 'sa-prd', 'tad', 'prd']; 
		};

		var getiFixes = function(){
			return ['no', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'];
		};

		var getMonitoringPolicies = function(){
			return ['RUNNING', 'PREVIOUS', 'STOPPED'];
		};

		var getPortalVersions = function(){
			return ['6014', '6015', '6103', '6104', '6106', '8000', '800'];
		};
		
		
		return {
			getHostNames: getHostNames,
			getEnvTypes: getEnvTypes,
			getInstallTypes: getInstallTypes,
			getVersions: getVersions,
			getRunAsUsers: getRunAsUsers,
			getDomains: getDomains,
			getiFixes: getiFixes,
			getMonitoringPolicies: getMonitoringPolicies,
			getPortalVersions: getPortalVersions
		}
	}
})();