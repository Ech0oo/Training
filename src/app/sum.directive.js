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
				var firstN = scope.summCtrl.firstNumber,
					secondN = scope.summCtrl.secondNumber,
					a,
					b,
					c;

				a = getNumber(firstN) || "Enter the first number";
				b = getNumber(secondN) || "Enter the second number";
				c = getNumber(a+b) || "The sum";

				summCtrl.result = a + " + " + b + " = " + c;
			}


			/* Used "_.compose". return Namber or false */
			function getNumber(valueFromInput) {
				 return _.compose(one, two)(valueFromInput);
			}

			/* return NaN for " true/false/null/'' " or Number/NaN */
			function two(FromInput) {
				return parseFloat(FromInput);
			}

			/* return false if NaN or Number */
			function one(number) {
				if (_.isNaN(number)) {
					return false;
				}

				return number;
			}

			/* convert function, if number return convert value or false */
//			function zero(number) {
//				if (number) {
//					return fx.convert(number, {from: "EUR", to: "CAD"});
//				}
//
//				return number;
//			}

		}
	}

}());
