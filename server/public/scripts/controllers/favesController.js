myApp.controller("favesController", ["$scope", "$http", function($scope, $http) {
    console.log("Am I runnin?");
    $scope.getFaves = function() {
        $http({
            method: "GET",
            url: '/faves',
        }).then(function(response) {
          var myEl = angular.element(document.querySelector('#homeHome'));
          myEl.empty();
            console.log("Get Success");
            // console.log(response);
            $scope.favorites = response.data;
            console.log($scope.favorites);
        }, function() {
            console.log("Get Error");
        });
    }
    angular.element(document).ready($scope.getFaves);
}]);
