(function() {
  'use strict';

  angular
    .module('search')
    .controller('SearchCtrl', ['SearchService', '$state', controller]);

  function controller(SearchService, $state) {
      //Setup view model
      var vm = this;
      vm.results = [];
      vm.error = {
        show: false,
        msg: null
      };
      vm.progress = {
        show: false
      };
      vm.onCellClick = function(item){
        $state.go('cellProfile', {id: item._id.$oid});
      };
      vm.onSearch = function(){
        var params = {
          'tciCode': null,
          'evnType': null,
          'cellName': null,
          'version': null
        };
        vm.progress.show = true;
        vm.error.show = false;
        SearchService.search(params).then(function(response){
          vm.progress.show = false;
          if(angular.isArray(response)){
            vm.results = response
          }
          else {
            vm.results = [];
          }
        }, function(){
          vm.error.show = true;
          vm.progress.show = false;
          vm.error.msg = "Error Generating Search Results";
        });
      };
  }

})();
