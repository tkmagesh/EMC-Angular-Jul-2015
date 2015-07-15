var greet = angular.module("myApp.greet", ["ngRoute"]);

greet.config(function($routeProvider){
    $routeProvider.when("/greet", {
        templateUrl : "greet/greetTemplate.html",
        controller : "greetController"
    });
});

greet.controller("greetController", function($scope, greetService){
    $scope.name = '';
    $scope.message = '';
    $scope.greet = function(){
        $scope.message = greetService.getMessage($scope.name);
    };
});

greet.service("greetService", function(){
    this.getMessage = function(name){
        return "Hi " + name + ", Have a nice day!";
    }
});

greet.filter("trimText", function(){
    return function(data){
        return data.length < 20 ? data : data.substr(0,20)+'...';
    }
});