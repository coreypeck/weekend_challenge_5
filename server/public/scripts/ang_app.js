var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider' , function($routeProvider){
  $routeProvider
  .when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: "homeController"
    })
    .when('/cats', {
      templateUrl: '/views/partials/cats.html',
      controller: "catController"
    })
    .when('/dogs' ,{
      templateUrl: '/views/partials/dogs.html',
      controller: "dogController"
    })
    .when('/reptiles',{
      templateUrl: "/views/partials/reptiles.html",
      controller: "reptileController"
    })
    .when('/barnyard',{
      templateUrl: "/views/partials/barnyard.html",
      controller: "barnyardController"
    })
    .when('/birds',{
      templateUrl: "/views/partials/birds.html",
      controller: "birdController"
    })
    .when('/horses',{
      templateUrl: "/views/partials/horses.html",
      controller: "horseController"
    })
    .when('/pigs',{
      templateUrl: "/views/partials/pigs.html",
      controller: "pigController"
    })
    .when('/rabbits',{
      templateUrl: "/views/partials/rabbits.html",
      controller: "rabbitController"
    })
    .when('/smallfurry',{
      templateUrl: "/views/partials/smallfurry.html",
      controller: "smallfurryController"
    })
    .otherwise({
      redirectTo: 'home'
    })


}]);
