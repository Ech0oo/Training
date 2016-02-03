(function() {
    'use strict';

    angular
        .module('app')
        .controller('SummCtrl', summation);

    function summation($scope) {
        $scope.summNumbers = function () {
            $scope.result = +$scope.firstNumber + +$scope.secondNumber;
        }
    }
})();