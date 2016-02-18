(function () { 
	'use strict';
	
	angular.module('designer').factory('FormConfigService', [impl]);

	function impl(){
		var baseConfig = {};
		var getInputConfig = function(type){
			var config = angular.copy(baseConfig);
			if(type === 'dmgr'){
				config['installType'] = true;
				config['runAsUser'] = true;
				config['nodeNumber'] = true;
				config['clusterNumber'] = true;
				config['maxHeapSize'] = true;
				config['initHeapSize'] = true;
			}
			else if(type === 'ihs'){
				config['nodeNumber'] = true;
				config['runAsUser'] = true;
				config['portBlock'] = true;
				config['installType'] = true;
			}
			else if(type === 'node'){
				config['nodeNumber'] = true;
				config['installType'] = true;
			}
			else if(type === 'clusterMember'){
				config['memberNumber'] = true;
				config['runAsUser'] = true;
				config['portBlock'] = true;
				config['heapSize'] = true;
				config['monitoringPolicy'] = true;
				config['maxHeapSize'] = true;
				config['initHeapSize'] = true;
			}
			else if(type === 'cell'){
				config['tciCode'] = true;
				config['hostName'] = true;
				config['envNumber'] = true;
				config['envType'] = true;
				config['version'] = true;
				config['domain'] = true;
				config['wasiFix'] = true;
				config['wpsiFix'] = true;
				config['portal'] = true;
				config['dbSchema'] = true;
				config['dbAlias'] = true;
			}
			config.type = type;
			return config;
		};
		var getComputedNameConfig = function(type){
			var config = [];
			if(type === 'dmgr'){
				config.push({type: 'memberName'});
				config.push({type: 'nodeName'});
				config.push({type: 'dmgrName'});
			}
			else if(type === 'ihs'){
				config.push({type: 'ihsProfile', alias: 'memberName'});
				config.push({type: 'ihsProfile', alias: 'dmgrName'});
			}
			else if(type === 'node'){
				config.push({type: 'nodeName'})
			}
			else if(type === 'clusterMember'){
				config.push({type: 'memberName'});
				config.push({type: 'clusterName'})
			}
			else if(type === 'cell'){
				config.push({type: 'cellName'});
			}
			return config;
		};
		
		return {
			getInputConfig: getInputConfig,
			getComputedNameConfig: getComputedNameConfig
		}
	}
})();