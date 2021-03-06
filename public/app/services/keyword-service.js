define(['fk/module'], function(module) {
  'use strict';

  module.registerFactory('KeywordService', ['$http', '$cookies', function($http, $cookies) {
    return {
      getKeywords: function(callback) {
        $http.get('api/keywords.json').success(function(data) {
          if (typeof callback === 'function') {
            callback(data);
          }
        });
      },
      getTestsuites: function (projectId, callback) {

        var request = {
          method: 'GET',
          url: 'http://localhost:8001/api/v1/keyword/getTestsuites/'+projectId,
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          }
        }

        $http(request).success(function (data) {
          callback(data);
        }).error(function () {});
      },
      getListFunctionalProject: function (callback) {
        var request = {
          method: 'GET',
          url: 'http://localhost:8001/api/v1/keyword/getListFuncProject',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          }
        }

        $http(request).success(function (data) {
          callback(data);
        }).error(function () {});
      },
      createKeywordProject: function (data, callback) {
        var request = {
          method: 'POST',
          url: 'http://localhost:8001/api/v1/keyword/createKeywordProject',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          },
          data: data
        }

        $http(request).success(function(data){
          callback(data);
        }).error(function(){});
      },
      createTestSuite: function (data, callback) {
        var request = {
          method: 'POST',
          url: 'http://localhost:8001/api/v1/keyword/createTestSuite',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          },
          data: data
        }

        $http(request).success(function(data){
          callback(data);
        }).error(function(){});
      },
      runKeywordProject: function (data, callback) {
        var request = {
          method: 'POST',
          url: 'http://localhost:8001/api/v1/keyword/runKeywordProject',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          },
          data: data
        }

        $http(request).success(function(data){
          callback(data);
        }).error(function(){});
      },
      removeTestSuite: function (suiteId, projectId, callback) {
        var request = {
          method: 'GET',
          url: 'http://localhost:8001/api/v1/keyword/deleteTestSuite/'+suiteId+'/'+projectId,
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          }
        }

        $http(request).success(function(data){
          callback(data);
        }).error(function(){});
      },
      updateTestSuite: function (data, callback) {
        var request = {
          method: 'PUT',
          url: 'http://localhost:8001/api/v1/keyword/updateTestSuite',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          },
          data: data
        }

        $http(request).success(function(data){
          callback(data);
        }).error(function(){});
      },
      addCustomKeyword : function(customKeyword,keywordProject, callback) {
        console.log(customKeyword);
        console.log(keywordProject);
        var request = {
          method: 'POST',
          url: 'http://localhost:8001/api/v1/addCustomKeyword',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          },
          data: {
            'customKeyword': customKeyword,
            'keywordProject': keywordProject
          }
        };

        $http(request).success(function(data,status) {
          callback(data,status);
        }).error(function(status) {
          callback(status);
        })
      },

      /*nambv2*/
     newTestCase : function(cases,callback) {
        console.log(cases);
        var request = {
          method: 'POST',
          url: 'http://localhost:8001/api/v1/testcase',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken'),
            'X-SPACE': $cookies.get('space')
          },
          data: {
            'cases': cases
          }
        };
        $http(request).success(function (data,status) {
          callback(data,status);
        }).error(function (data,status) {
          callback(data,status);
        })
      },

      getListTestCase : function(callback) {
        var request = {
          method: 'GET',
          url: 'http://localhost:8001/api/v1/getListTestCase',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          }
        };
        $http(request).success(function(data) {
          callback(data);
        }).error(function(data,status) {
          callback(data,status);
        })
      },

      updateCase : function(cases,callback) {
        var request = {
          method: 'PUT',
          url: 'http://localhost:8001/api/v1/updateCase',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          },
          data: {
            'cases':cases
          }
        };

        $http(request).success(function(data,status) {
          callback(data,status);
        }).error(function(data,status) {
          callback(data,status);
        })
      },

      removeCase : function(caseId,callback) {
        console.log(caseId);
        var request = {
          method: 'DELETE',
          url: 'http://localhost:8001/api/v1/removeCase/'+ caseId,
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          }
        };

        $http(request).success(function(data,status) {
          callback(data,status);
        }).error(function(data,status) {
          callback(data,status);
        })
      },

      getCustomKeywords : function(tenant,space,projectID,callback) {
        var request = {
          method: 'GET',
          url: 'http://localhost:8001/api/v1/getCustomKeywords/'+  tenant + '/' + space + '/' +projectID,
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          }
        };

        $http(request).success(function(data) {
          console.log(data);
          callback(data);
        }).error(function(status) {
          callback(status);
        })
      },

      addCustomKeyword : function(customKeyword,projectId, callback) {
        console.log(customKeyword);
        console.log(projectId);
        var request = {
          method: 'POST',
          url: 'http://localhost:8001/api/v1/addCustomKeyword',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          },
          data: {
            'customKeyword': customKeyword,
            'projectId': projectId
          }
        };

        $http(request).success(function(data,status) {
          callback(data,status);
        }).error(function(status) {
          callback(status);
        })
      },

      updateCustomKeyword : function(customKeyword,projectId,callback) {
        console.log(projectId);
        console.log(customKeyword);
        var request = {
          method: 'PUT',
          url: 'http://localhost:8001/api/v1/update',
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          },
          data: {
            'projectId': projectId,
            'customKeyword': customKeyword
          }
        };

        $http(request).success(function(resopnse){
          callback(resopnse);
        }).error(function(status){
          callback(status);
        })
      },

      removeCustomKeyword : function(projectID,customKeywordName,callback) {
        var request = {
          method: 'DELETE',
          url: 'http://localhost:8001/api/v1/removeCustomKeyword/'+ projectID+'/'+ customKeywordName,
          headers: {
            'X-AUTH-TOKEN': $cookies.get('authToken')
          }
        };

        $http(request).success(function(data,status) {
          callback(data,status);
        }).error(function(status) {
          callback(data,status);
        })
      }
      /*end nambv2*/
    }
  }]);
});