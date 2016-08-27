myApp.controller("homeController", ["$scope", "$http", function($scope, $http) {
  var key = '768bbb78142dad544e31c6fa2bfedee0';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.animal = response.data.petfinder.pet;
      if ($scope.animal.name.$t == undefined || $scope.animal.description.$t == undefined || $scope.animal.media.photos.photo[0].$t == undefined) {
          $scope.getRandomPet();
      }else{
        $scope.breed = $scope.animal.animal.$t;
      }
    });
  }
  angular.element(document).ready($scope.getRandomPet);
}]);
