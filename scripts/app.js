angular.module('app', [])
  .controller('TwoWayCtrl', ['$scope', function($scope) {
    var digest = 0;
    $scope.val = 0;
    $scope.$watch(function() {
      digest++;
      console.log('two way digest count', digest);
      
      if($scope.val >= 4 && $scope.val < 10){
        $scope.val++;
      }
    });

    this.changeVal = function() {
      $scope.val++;
      digest = 0;
    };
  }])
  .controller('OneWayCtrl', ['$scope', function($scope) {
    var digest = 0;
    $scope.val = 0;
    $scope.$watch(function() {
      digest++;
      //console.log('one digest digest count', digest);
      
      if($scope.val >= 4 && $scope.val < 10){
        $scope.val++;
      }
    });

    this.changeVal = function() {
      $scope.val++;
      digest = 0;
    };
  }]);