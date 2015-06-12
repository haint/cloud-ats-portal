define(['fk/module'], function (module) {

	'use strict';
	module.registerDirective('uiIf', [function () {

		return {
			transclude: 'element',
      priority: 1000,
      
      terminal: true,
      restrict: 'A',
      compile: function (element, attr, linker) {
      	return function (scope, iterStartElement, attr) {

      		iterStartElement[0].doNotMove = true;
      		var expression = attr.uiIf;
      		var lastElement;
      		var lastScope;
      		scope.$watch(expression, function (newValue) {
      			if (lastElement) {
      				lastElement.remove();
      				lastElement = null;
      			}
      			if (lastScope) {
      				lastScope.$destroy();
      				lastScope = null;
      			}
      			if (newValue) {
      				lastScope = scope.$new();
      				linker(lastScope, function (clone) {
      					lastElement = clone;
      					iterStartElement.after(clone);
      				});
      			}
      			iterStartElement.parent().trigger("$childrenChanged");
      		});
      	}
      }
		}
	}]);
});