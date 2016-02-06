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
        restrict: 'E'
		};
		return directive;

		function link(scope, element, attrs) {
		  /* */
		}
	}
	
})();