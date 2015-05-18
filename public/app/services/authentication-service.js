define(['app'], function(app) {

  'use strict';

  return app.factory('AuthenticationService', 

    ['$http', '$q', '$log', '$cookies', '$window', '$rootScope', '$state', '$stateParams',
    function($http, $q, $log, $cookies, $window, $rootScope, $state, $stateParams) {
    
    function login(email, password, callback) {
      var request = {
        method: 'POST',
        url: 'http://localhost:9000/api/v1/user/login',
        data: {
          email: email,
          password: password
        }
      }

      $http(request)
      .success(function(data) {
        callback(data);
      })
      .error(function(data, status, headers, config) {
        if(status === 401) {
          var data = {
            error: true,
            message : 'Username or password is incorrect'
          }
          callback(data);
        }
      });
    };

    function logout(callback) {
      var request = {
        method: 'GET',
        url: 'http://localhost:9000/api/v1/user/logout',
        headers: {
          'X-AUTH-TOKEN': $cookies.get('authToken')
        }
      }

      $http(request)
      .success(function() {
        $cookies.remove('authToken');
        $window.sessionStorage.removeItem('context');
        callback();
      })
    };

    function register(email, password, firstname, lastname, callback) {
      var request = {
        method: 'POST',
        url: 'http://localhost:9000/api/v1/user/register',
        data: {
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname
        }
      }

      $http(request)
      .success(function(data) {
        callback(data);
      })
      .error(function(data, status, headers, config) {
        if(status === 401) {

           var data = {
            error: true,
            message : 'register fail'
          }
          callback(data);
        }
      });
    };

    function getTenants(callback) {
      var request = {
        method: 'GET',
        url: 'http://localhost:9000/api/v1/user/tenants',
      }

      $http(request).success(function(data){
        callback(data);
      });
    };
    function context() {

      var dfd = $q.defer();

      var request = {
        method: 'GET',
        url: 'http://localhost:9000/api/v1/context',
        headers: {
          'X-AUTH-TOKEN': $cookies.get('authToken')
        }
      }

      $http(request)
      .success(function(response) {
        dfd.resolve(response);
      })
      .error(dfd.reject);

      return dfd.promise;
    };

    return {
      login: function(email, password, callback) {
        login(email, password, callback);
      },
      logout: function(callback) {
        logout(callback);
      },
      context: function() {
        return context();
      },
      verifyState: function(state) {
        return verifyState(state);
      },
      register: function(email, password, firstname, lastname, callback) {
        register(email, password, firstname, lastname, callback);
      },
      getTenants: function(callback){
        getTenants(callback);
      }
    }
  }]);
});