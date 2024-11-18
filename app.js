var app = angular.module('ecommerceApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/login-signup.html",
            controller: "AuthController"
        })
        .when("/dashboard", {
            templateUrl: "templates/dashboard.html",
        })
        .otherwise({
            redirectTo: '/'
        });
});
