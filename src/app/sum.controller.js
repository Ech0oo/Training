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
		
		$.getJSON("content/rates.json", getRates)
//		$.getJSON("http://api.fixer.io/latest?symbols=USD,GBP", demo)
		
		function getRates(data) {
//			fx.base =data.base;
//			fx.rates = data.rates;


//			alert("£1 = $" + rate.toFixed(4))


			// Check money.js has finished loading:
			if ( typeof fx !== "undefined" && fx.rates ) {
				fx.rates = data.rates;
				fx.base = data.base;
				console.log("CAD " + fx.rates.CAD);
				console.log("Base " + fx.base);
			} else {
				// If not, apply to fxSetup global:
				var fxSetup = {
					rates : data.rates,
					base : data.base
				}
			}
		}

			

	}
})();
