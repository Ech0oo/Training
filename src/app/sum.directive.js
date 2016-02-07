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
			controllerAs: "summCtrl"
		};
		return directive;

		function link(scope, element, attrs, summCtrl) {

			element.on('load', summarize());

			scope.changeResult = summarize;

			function summarize() {
				var firstN = parseFloat(scope.summCtrl.firstNumber),
					secondN = parseFloat(scope.summCtrl.secondNumber),
					a = "Enter the first number",
					b = "Enter the second number",
					c = "The sum";

				if (checkInputNumber(firstN)) {
					a = firstN;
				}

				if (checkInputNumber(secondN)) {
					b = secondN;
				}

				if (checkInputNumber(a + b)) {
					c = a + b;
				}

				summCtrl.result = a + " + " + b + " = " + c;
			}


			/* return true if input value is not a number else return false */
			function checkInputNumber(value) {
				if (_.isNumber(value) && !_.isNaN(value)) {
					return true;
				}

				return false;
			}

//			console.log("From controller: " + vm.directiveTestVariable);
//			console.log("From vm: " + scope.summCtrl.firstNumber);



		}
	}

}());
