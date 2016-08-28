myApp.controller("indexController", ["$scope", "$http", function($scope, $http) {
    $scope.favNumber = 0;
    $scope.types = [{
        id: 0,
        value: "barnyard",
        kind: "Barnyard"
    }, {
        id: 1,
        value: "bird",
        kind: "Bird"
    }, {
        id: 2,
        value: "cat",
        kind: "Cat"
    }, {
        id: 3,
        value: "dog",
        kind: "Dog"
    }, {
        id: 4,
        value: "horse",
        kind: "Horses"
    }, {
        id: 5,
        value: "pig",
        kind: "Pigs"
    }, {
        id: 6,
        value: "rabbit",
        kind: "Rabbits"
    }, {
        id: 7,
        value: "reptile",
        kind: "Scales, Fins and Other"
    }, {
        id: 8,
        value: "smallfurry",
        kind: "Small and Furry",
    }];
    $scope.getPet = function() {
        if ($scope.selectedItem != undefined) {
            console.log("Scope = ", $scope.selectedItem);
            $scope.pettype = $scope.types[$scope.selectedItem].value;
            console.log($scope.pettype);
        }
        var key = '768bbb78142dad544e31c6fa2bfedee0';
        var baseURL = 'http://api.petfinder.com/';
        var query = baseURL + 'pet.getRandom';
        query += '?key=' + key;
        if ($scope.pettype == undefined) {

        } else {
            query += '&animal=' + $scope.pettype;
        }
        var myEl = angular.element(document.querySelector('#homeHome'));
        myEl.empty();
        query += '&output=basic';
        query += '&format=json';

        console.log('query: ', query);

        var request = encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(function(response) {
            console.log("Start: am I running?");
            $scope.animal = response.data.petfinder.pet;
            if ($scope.animal.name.$t == undefined || $scope.animal.description.$t == undefined || $scope.animal.media.photos == undefined || $scope.animal.media.photos.photo[0].$t == undefined) {
                console.log("if: am I running?");
                $scope.getPet();
            } else {
                console.log("else: am I running?");
                var myEl = angular.element(document.querySelector('#homeHome'));
                myEl.empty();
                $scope.getFaves();
            }
        });
    }
    angular.element(document).ready($scope.getPet);
    $scope.postFavorite = function() {
        console.log($scope.animal);
        var description = $scope.animal.description.$t.substring(0, 96);
        description += "...";
        console.log(description);
        var request = {
            id: $scope.animal.id.$t,
            name: $scope.animal.name.$t,
            photo: $scope.animal.media.photos.photo[0].$t,
            description: description
        }
        console.log(request);
        $http({
            method: "POST",
            url: '/faves',
            data: request,
        }).then(function() {
            console.log("Added to Favorites!");
            $scope.getFaves();
        }, function() {
            console.log("Post Error");
        });
    }
    $scope.getFaves = function() {
        $http({
            method: "GET",
            url: '/faves',
        }).then(function(response) {
            var myEl = angular.element(document.querySelector('#homeHome'));
            myEl.empty();
            console.log("Get Success");
            // console.log(response);
            $scope.favNumber = response.data;
            $scope.favNumber = $scope.favNumber.length
            console.log($scope.favNumber);
        }, function() {
            console.log("Get Error");
        });
    }
}]);
