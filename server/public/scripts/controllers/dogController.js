myApp.controller("dogController", ["$scope", "$http", function($scope, $http) {
  var key = '768bbb78142dad544e31c6fa2bfedee0';
  var baseURL = 'http://api.petfinder.com/';
  console.log('dogs controller up!');

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
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
      // $scope.getBreeds();

    });
  };


  // $scope.getBreeds = function(){
  //   var query = 'breed.list';
  //   query += '?key=' + key;
  //   query += '&animal=' + $scope.breed.toLowerCase();
  //   query += '&format=json';
  //
  //   var request  = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
  //   console.log(request);
  //
  //   $http.jsonp(request).then(
  //     function(response) {
  //       console.log('breeds: ' , response.data);
  //       $scope.breeds = response.data.petfinder.breeds.breed;
  //   });
  // };
    angular.element(document).ready($scope.getRandomPet);
}]);
