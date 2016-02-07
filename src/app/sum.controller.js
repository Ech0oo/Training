(function () {
	'use strict';

	angular
		.module('app')
		.controller('SummCtrl', SummCtrl);

	function SummCtrl($scope , $stateParams) {
		/* vm - ViewModel */
		var vm = this;

		/* get from the url n1 and n2 numbers */
		vm.firstNumber = $stateParams.n1;
		vm.secondNumber = $stateParams.n2;

		/*var runTestFunction = function () {
			var demo = function(data) {
				fx.rates = data.rates;

				console.log("CAD " + fx.rates.CAD);
//				alert("£1 = $" + rate.toFixed(4))


				// Check money.js has finished loading:
//				if ( typeof fx !== "undefined" && fx.rates ) {
//					fx.rates = data.rates;
//					fx.base = data.base;
//				} else {
//					// If not, apply to fxSetup global:
//					var fxSetup = {
//						rates : data.rates,
//						base : data.base
//					}
//				}
			}

			$.getJSON("http://api.fixer.io/latest?symbols=EUR,CAD", demo)
		}();*/

	}
})();
