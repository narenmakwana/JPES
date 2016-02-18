(function() {
  'use strict';

  angular
    .module('designer')
    .controller('DesignerCtrl', ['$state', 'OptionsService', 'FormConfigService', 'ComputedNameService', '$timeout', controller]);

  function controller($stateParams, OptionsService, FormConfigService, ComputedNameService, $timeout) {
      //Setup view model
      var vm = this;
      vm.config = {
        dmgr: [],
        ihs: [],
        clusterMember: [],
        node: [],
        cell: null
      };
      vm.form = {
        config: {},
        data: {}
      };
      vm.view = {
        showForm: false
      };
      vm.cancelForm = function(){
        vm.view.showForm = false;
      };
      vm.submitForm = function(type, data){
        if(angular.isArray(vm.config[type])){
          vm.config[type].push(data);
        }
        else {
          vm.config[type] = data;
        }
        generateComputedNames(vm.config[type], FormConfigService.getComputedNameConfig(type));
        $timeout(function(){
          vm.view.showForm = false;
        });
      };
      vm.gotoForm = function(type){
        vm.form.config = FormConfigService.getInputConfig(type);
        vm.form.data = angular.isArray(vm.config[type])? vm.config[type][0] : {};
        $timeout(function(){
          vm.view.showForm = true;
        });
      };
      vm.isCellValid = function(){
        return vm.config.dmgr.length && vm.config.ihs.length && vm.config.clusterMember.length && vm.config.node.length && vm.config.cell;
      };

      var generateComputedNames = function(config, data){
        if(angular.isArray(config)){
          angular.forEach(function(item){
            var result = ComputedNameService.getComputedName(item.type), dest = item.alias?item.type:item.alias;
            data[dest] = result;
          })
        }
      };
      
  }

})();
