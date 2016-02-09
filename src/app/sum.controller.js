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
	}
	
})();
