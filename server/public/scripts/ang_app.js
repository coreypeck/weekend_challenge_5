var myApp = angular.module('myApp', ['ngRoute']);

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
