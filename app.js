var attendanceApp = angular.module('attendanceApp', ['ui.router']);

attendanceApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });

});