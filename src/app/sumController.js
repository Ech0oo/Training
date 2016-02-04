(function () {
    'use strict';

    angular
        .module('app')
        .controller('SummCtrl', summation);

    function summation($scope) {
        $scope.summNumbers = function () {
            var firstNum = +$scope.firstNumber,
                secondNum = +$scope.secondNumber;
            
            // check type for number
            if (!_.isNumber(firstNum) || isNaN(firstNum)) {
                $scope.result = "First value is not a number";
            } else if (!_.isNumber(secondNum) || isNaN(secondNum)) {
                $scope.result = "Second value is not a number";
            } else {
                $scope.result = firstNum + secondNum;
            }
               
        }
    }
})();