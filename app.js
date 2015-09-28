var attendanceApp = angular.module('attendanceApp', ['ui.router']);

attendanceApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });
    
    $stateProvider.state('sign-in', {
        url: "sign-in",
        templateUrl: "partials/sign-in.html"
    });

    $stateProvider.state('presence', {
        url: "presence",
        templateUrl: "partials/presence.html"
    });

});