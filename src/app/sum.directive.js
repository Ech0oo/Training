(function () {
    'use strict';

/**
* @desc directive sum add input element that summarize 2 numbers
* @example <lesson-sum></lesson-sum>
*/
	angular
		.module('app')
		.directive('lessonSum', sum);

	function sum() {
		var directive = {
			link: link,
			templateUrl: 'content/sum.directive.html',
			restrict: 'E',
			controller: "SummCtrl",
			controllerAs: "vm"
		};
		return directive;

		function link(scope, element, attrs, vm) {
			console.log("From controller: " + vm.directiveTestVariable);
			console.log("From vm: " + scope.summCtrl.firstNumber);
			scope.vm.inputsExpression = vm.firstNumber;

			/* check type for number */
			

			/* return true if input value is a number else return false */
			function checkInputNumber(value) {
				if (_.isNumber(value) && !_.isNaN(value)) {
					return true;
				}

				return false;
			}
		}
	}
	
}());