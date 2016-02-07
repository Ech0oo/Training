(function () {
	'use strict';

	angular
		.module('app')
		.controller('SummCtrl', SummCtrl);

	function SummCtrl($scope , $stateParams) {
		/* vm - ViewModel */
		var vm = this;

		vm.title = "My title from controller";
		vm.n1 = $stateParams.n1; // temp
		vm.n2 = $stateParams.n2; //temp

		vm.firstNumber = $stateParams.n1;
		vm.secondNumber = $stateParams.n2;

	}
})();
