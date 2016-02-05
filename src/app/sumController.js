(function () {
    'use strict';

    angular
        .module('app')
        .controller('SummCtrl', SummCtrl);

    function SummCtrl() {
        var vm = this;
        
        vm.summNumbers = function () {
            var firstNum = +vm.firstNumber,
                secondNum = +vm.secondNumber;
            
            // check type for number
            if (!_.isNumber(firstNum) || _.isNaN(firstNum) || _.isUndefined(vm.firstNumber)) {
                vm.result = "First value is not a number";
            } else if (!_.isNumber(secondNum) || _.isNaN(secondNum) || _.isUndefined(vm.firstNumber)) {
                vm.result = "Second value is not a number";
            } else {
                vm.result = firstNum + secondNum;
            }
               
        };
        
    }
})();