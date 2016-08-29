var myApp = angular.module('myApp', ['ngRoute']);

//Routes that change the partial based on what we want to view

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/partials/home.html',
            controller: "indexController"
        })
        .when('/faves', {
            templateUrl: "/views/partials/faves.html",
            controller: "favesController"
        })
        .otherwise({
            redirectTo: 'home'
        })
}]);
