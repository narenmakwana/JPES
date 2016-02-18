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
				var result = '';
	            if(type === 'cellName'){
	              result = getCellName()
	            }
	            else if(type === 'dmgrName'){
	              result = getDmgrName();
	            }
	            else if(type === 'clusterName'){
	              result = getClusterName();
	            }
	            else if(type === 'nodeName'){
	              result = getNodeName();
	            }
	            else if(type === 'memberName'){
	              result = getMemberName();
	            }
	            else if(type === 'profileName'){
	              result = getProfileName();
	            }
	            else if(type === 'ihsProfile'){
	              result = getIHSProfile();
	            }
	            return '';
			}
		}
	}
})();