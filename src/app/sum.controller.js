(function () {
    'use strict';

    angular
        .module('app')
        .controller('SummCtrl', SummCtrl);

    function SummCtrl() {
        /* vm - ViewModel */
        var vm = this;
		
		vm.directiveTestVariable = "testVariable";
		
        
		vm.summNumbers = summNumbers;
		
        /* summarize inputs data*/
		function summNumbers() {
            var firstNum = +vm.firstNumber,
                secondNum = +vm.secondNumber;
            
            /* check type for number */
            if ( _.isUndefined(vm.firstNumber) || !checkInputNumber(firstNum)) {
                vm.result = "First value is not a number";
            } else if ( _.isUndefined(vm.secondNumber) || !checkInputNumber(secondNum)) {
                vm.result = "Second value is not a number";
            } else {
                vm.result = firstNum + secondNum;
            }
            
            /* return true if input value is a number else return false */
            function checkInputNumber(value) {
                if (_.isNumber(value) && !_.isNaN(value)) {
                    return true
                }
                
                return false;
            }
               
        };
        
    }
})();