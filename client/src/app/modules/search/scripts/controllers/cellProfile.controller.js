(function() {
  'use strict';

  angular
    .module('search')
    .controller('CellProfileCtrl', ['$state', controller]);

  function controller($stateParams) {
      //Setup view model
      var vm = this;
      vm.id = $stateParams.params.id;
      vm.error = {
        show: false,
        msg: null
      };
      vm.progress = {
        show: false
      };
      
  }

})();
