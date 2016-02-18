(function () { 
	'use strict';
	
	angular.module('designer').factory('ComputedNameService', [impl]);

	function impl(){
		var getCellName = function(tciCode, version, envType, envNumber){
			return tciCode + '-cell' + version[0] + version[1] + '-' + envType + envNumber;
		};
		var getDmgrName = function(tciCode, version, envType, envNumber, suffix){
			return tciCode + '-dmgr' + version[0] + version[1] + '-' + envType + envNumber + suffix?suffix:'';
		};
		var getClusterName = function(tciCode, appName, clusterNumber, envType, envNumber, suffix){
			return tciCode + '-' + appName + clusterNumber + '-' + envType + envNumber + suffix?suffix:'';
		};
		var getNodeName = function(tciCode, version, envType, envNumber, nodeNumber, suffix){
			return tciCode + '-node' + version[0] + version[1] + '-' + envType + envNumber + '-' + nodeNumber + suffix?suffix:'';
		};
		var getMemberName = function(tciCode, envType, envNumber, appName, clusterNumber, memberNumber, suffix){
			return tciCode + '-' + appName + clusterNumber + '-' + envType + envNumber + '-' + memberNumber + suffix?suffix:''
		};
		var getProfileName = function(tciCode, version, envType, envNumber, nodeNumber, suffix){
			return tciCode + '-node' + version[0] + version[1] + '-' + envType + envNumber + '-' + nodeNumber + suffix?suffix:'';
		};
		var getIHSProfile = function(tciCode, version, envType, envNumber, ihsNumber, suffix){
			return tciCode + '-ihs-' + version[0] + version[1] + '-' + envType + envNumber + '-' + ihsNumber + suffix?suffix:'';
		};
		
		return {
			getComputedName: function(type, data){
				//TODO Hook these up to the right inputs
				var result = 'TODO-Computed-Names';
				type = null;
				if(type === 'cellName'){
					result = getCellName(data)
				}
				else if(type === 'dmgrName'){
					result = getDmgrName(data);
				}
				else if(type === 'clusterName'){
					result = getClusterName(data);
				}
				else if(type === 'nodeName'){
					result = getNodeName(data);
				}
				else if(type === 'memberName'){
					result = getMemberName(data);
				}
				else if(type === 'profileName'){
					result = getProfileName(data);
				}
				else if(type === 'ihsProfile'){
					result = getIHSProfile(data);
				}
				return result;
			}
		}
	}
})();