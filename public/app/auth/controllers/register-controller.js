define(['auth/module'], function(module) {
  'use strict';

  return module.registerController('RegisterCtrl', ['$scope', '$cookies', '$state' , 'AuthenticationService', RegisterCtrl]);

  function RegisterCtrl($scope, $cookies, $state, AuthenticationService) {
    $scope.email = '';
		$scope.password = '';
		$scope.firstname = '';
		$scope.lastname = '';
    $scope.space = '';
		AuthenticationService.getTenants(function(data){
			$scope.tenants = data;

      if (data.length > 0) {
        $scope.checkTenant = true;
      } else {
        $scope.checkTenant = false;
      }
		});
    
    $scope.submit = function() {
      var expires = new Date();
      expires.setDate(expires.getDate() + 365);

      AuthenticationService.register($scope.email, $scope.password, $scope.firstname, $scope.lastname, $scope.selectedTenant, $scope.space, function(data) {
      	if (data.error) {
          $scope.message = data.message;          
        } else {
          $cookies.put('authToken', data.authToken, {
            expires: expires
          });
        	AuthenticationService.context().then(function(context) {
            var tenant = context.tenant._id.toLowerCase();
            $state.go('app.dashboard');
          });
        }
      	
      });
    }
  }
});