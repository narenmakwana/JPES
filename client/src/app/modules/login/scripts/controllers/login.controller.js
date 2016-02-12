(function() {
  'use strict';

  angular
    .module('login')
    .controller('LoginCtrl', ['AuthService', '$state', '$stateParams', controller]);

  function controller(AuthService, $state, $stateParams) {
      //Setup view model
      var vm = this;
      vm.credentials = {
        username: null,
        password: null
      };
      vm.loading = false;
      
      vm.onSubmit = function(){
        vm.loading = true;
        AuthService.authenticate(vm.credentials.username, vm.credentials.password).then(
          //Success
          function(){
            var dest = $stateParams.redirect || 'home';
            var params = $stateParams.redirectParams || {};
            $state.go(dest, params);
          },
          //Fail
          function(/*err*/){
            vm.loading = false;
          }
        );
      };
  }

})();
