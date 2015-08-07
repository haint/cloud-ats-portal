define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-resource',
  'angular-dragdrop',
  'morris'
], function(ng, couchPotato) {
  'use strict';

  var module = ng.module('app.fk', ['ui.router', 'ngResource', 'ngDragDrop']);

  module.config(function($stateProvider, $couchPotatoProvider) {
    $stateProvider
      .state('app.fk', {
        url: '/fk',
        views: {
          "content@app": {
            controller: 'FKCtrl',
            templateUrl: 'app/fk/views/fk.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'fk/controllers/fk-controller',
                'fk/directives/data-provider-table',
                'fk/directives/keywords',
                'fk/directives/keyword-params',
                'fk/directives/steps',
                'fk/directives/suites',
                'fk/directives/cases',
                'fk/directives/data-driven-selector',
                'services/keyword-service',
                'modules/ui/directives/smartHtmlPopover',
                'modules/forms/common',
                'modules/forms/directives/validate/smartValidateForm',
                'modules/forms/directives/wizard/smartWizard',
                'modules/forms/directives/input/smartXeditable',
                'modules/widgets/directives/widgetGrid',
                'modules/widgets/directives/jarvisWidget',
                'modules/forms/directives/input/smartSelect2',
                'modules/forms/directives/input/smartUislider',
                'fk/directives/ui-if'
              ])
            }
          }
        },
        data: {
          title: 'Keywords Framework',
          requireLogin: true
        }
      }).state('app.provider', {

        url: '/provider',
        views: {
          "content@app": {
            controller: 'ProviderCtrl',
            templateUrl: 'app/fk/views/data-provider.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'fk/controllers/provider-controller',
                'fk/directives/data-provider-table',
                'fk/directives/tick-box',
                'fk/directives/new-data-provider-form',
                'modules/widgets/directives/jarvisWidget',
                'modules/forms/directives/input/smartSelect2',
                'modules/forms/directives/input/smartXeditable'
              ])
            }
          }
        },
        data: {
          title: 'Data Provider',
          requireLogin: true
        }
      }).state('app.list', {
        url: '/list',
        views: {
          "content@app": {
            controller: 'FKCtrl',
            templateUrl: 'app/fk/views/project-list.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'fk/controllers/fk-controller',
                'fk/directives/keywords',
                'fk/directives/close-popover',
                'fk/directives/add-icon',
                'fk/directives/keyword-params',
                'fk/directives/steps',
                'fk/directives/suites',
                'fk/directives/cases',
                'fk/directives/remove-sampler-button',
                'fk/directives/data-driven-selector',
                'services/keyword-service',
                'modules/ui/directives/smartHtmlPopover',
                'modules/forms/common',
                'modules/forms/directives/validate/smartValidateForm',
                'modules/forms/directives/wizard/smartWizard',
                'modules/forms/directives/input/smartXeditable',
                'modules/widgets/directives/widgetGrid',
                'modules/widgets/directives/jarvisWidget',
                'modules/forms/directives/input/smartSelect2',
                'modules/forms/directives/input/smartUislider',
                'fk/directives/ui-if'
              ])
            }
          }
        },
        data: {
          title: 'Project List',
          requireLogin: true
        }
      }).state('app.projectdetail', {
        url: '/projectdetail',
        views: {
          "content@app": {
            controller: 'ProjectsCtrl',
            templateUrl: 'app/fk/views/project-list.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                  
                'fk/controllers/fk-controller',
                'fk/directives/keywords',
                'fk/directives/close-popover',
                'fk/directives/add-icon',
                'fk/directives/keyword-params',
                'fk/directives/steps',
                'fk/directives/suites',
                'fk/directives/cases',
                'fk/directives/remove-sampler-button',
                'fk/directives/data-driven-selector',
                'services/keyword-service',
                'modules/ui/directives/smartHtmlPopover',
                'modules/forms/common',
                'modules/forms/directives/validate/smartValidateForm',
                'modules/forms/directives/wizard/smartWizard',
                'modules/forms/directives/input/smartXeditable',
                'modules/widgets/directives/widgetGrid',
                'modules/widgets/directives/jarvisWidget',
                'modules/forms/directives/input/smartSelect2',
                'modules/forms/directives/input/smartUislider',
                'fk/directives/ui-if'
              ])
            }
          }
        },
        data: {
          title: 'Project Detail',
          requireLogin: true
        }
      }).state('app.report', {
        url: '/report',
        views: {
          "content@app": {
            templateUrl: 'app/fk/views/report.html',
			resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'fk/controllers/fk-controller'
				])}
          }
        },
        data: {
          title: 'Project Report',
          requireLogin: true
        }
      });
  });

  couchPotato.configureApp(module);

  module.run(function($couchPotato) {
    module.lazy = $couchPotato;
  });

  return module;
})