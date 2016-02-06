(function () {
	'use strict';

	angular
		.module('app')
		.controller('SummCtrl', SummCtrl);

	function SummCtrl() {
		/* vm - ViewModel */
		var vm = this;

//		vm.firstNumber = "Enter the first number";
//		vm.secondNumber = "Enter the second Number";

		/* test variable for geting from controller to directive */
		vm.directiveTestVariable = "testVariable";

	}
})();
