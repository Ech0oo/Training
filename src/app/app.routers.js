(function () {
	'use strict';

	angular
		.module('app')
		.config(['$urlRouterProvider', '$stateProvider', routeConfig]);

	function routeConfig($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/');

		/*
			n1 - the first number
			n2 - the second number
		*/
		$stateProvider
			.state('n1', {
				url: '/:n1',
				templateUrl: 'content/form.html',
				controller: 'SummCtrl',
				controllerAs: 'summCtrl'
			})

			.state('n2', {
				url: '/:n1/:n2',
				templateUrl: 'content/form.html',
				controller: 'SummCtrl',
				controllerAs: 'summCtrl'
			});
	}
}());
