(function () {
	'use strict';

/**
* @desc directive sum add input element that summarize 2 numbers
* @example <lesson-sum></lesson-sum>
*/
	angular
		.module('app')
		.directive('lessonSum', sum);

	function sum(fixerService) {
		var directive = {
			link: link,
			templateUrl: 'app/components/sum.directive.html',
			restrict: 'E',
			controller: 'SummCtrl',
			controllerAs: 'summCtrl'
		};
		return directive;

		function link(scope, element, attrs, summCtrl) {
			var resultSummarizeNumber;

			element.on('load', summarize());

			scope.changeResult = summarize;

			scope.changeCurrency = convert;

			function summarize() {
				var firstN = scope.summCtrl.firstNumber,
					secondN = scope.summCtrl.secondNumber,
					a,
					b,
					c;

				
				a = getNumber(firstN);
				b = getNumber(secondN);
				
				if ( !_.isBoolean(a) && !_.isBoolean(b)) {
					c = a + b;
				} else {
					c = 'The sum';
				}
				
				if(!a && a !== 0) {
					a = 'Enter the first number';
				}
				
				if(!b && b !== 0) {
					b = 'Enter the second number';
				}
				
				
				resultSummarizeNumber = c;

				summCtrl.result = a + " + " + b + " = " + c;
				summCtrl.convertRate = toNewCurrency(c, summCtrl.selectedState);
			}


			/* Used "_.compose". return Namber or false */
			function getNumber(valueFromInput) {
				 return _.compose(one, two)(valueFromInput);
			}
			

			/* return NaN for " true/false/null/'' " or Number/NaN */
			function two(FromInput) {
				return parseFloat(FromInput, 10);
			}

			/* return false if NaN otherwise the number */
			function one(number) {
				if (_.isNaN(number)) {
					return false;
				}

				return number;
			}

			/* convert function, if number return convert value or number */
			function toNewCurrency(number, symbol) {
				if (!_.isString(number)) {
					return fx.convert(number, {from: 'EUR', to: symbol});
				}

				return number;
			}

			/* calculate new currency */
			function convert() {
				summCtrl.convertRate = toNewCurrency(resultSummarizeNumber, summCtrl.selectedState);
			}

		}
	}

}());
