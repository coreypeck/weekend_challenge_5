myApp.controller("reptileController", ["$scope", "$http", function($scope, $http) {
    var key = '768bbb78142dad544e31c6fa2bfedee0';
    var baseURL = 'http://api.petfinder.com/';
    $scope.breed = '';
    console.log('reptiles controller up!');

    $scope.getRandomPet = function() {
        var query = baseURL + 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=reptile';
        query += '&output=basic';
        query += '&format=json';

        console.log('query: ', query);

        var request = encodeURI(query) + '&callback=JSON_CALLBACK';

        $http.jsonp(request).then(function(response) {
            console.log(response);
            $scope.animal = response.data.petfinder.pet;
            console.log("Name: ", $scope.animal.name.$t);
            console.log("Description: ", $scope.animal.description.$t);
            console.log("Photo Url: ", $scope.animal.media.photos.photo[0].$t);

            if ($scope.animal.name.$t == undefined || $scope.animal.description.$t == undefined || $scope.animal.media.photos.photo[1].$t == undefined) {
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
    //   var request  = baseURL + encodedURI(query) + '&callback=JSON_CALLBACK';
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
