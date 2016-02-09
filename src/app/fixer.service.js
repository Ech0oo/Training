(function () {
	'use strict';
	
	angular
		.module("currencyService", [])
		.service("fixerService", fixer);
	
	function fixer() {
		$.getJSON("content/rates.json", getRates)
//		$.getJSON("http://api.fixer.io/latest?symbols=USD,GBP", demo)
		
		function getRates(data) {
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
		}// End getRates;
		
	};
}());