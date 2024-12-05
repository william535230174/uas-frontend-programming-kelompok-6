var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/login.html',
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
        })
        .otherwise({
            redirectTo: '/'
        })
}])

app.controller('AuthController', function ($scope, $location, $timeout) {
    $scope.users = JSON.parse(localStorage.getItem('users')) || [];
    $scope.user = {username: '', password: '', confirmPassword: '' };
    $scope.toastMessage = "";

    $scope.showToast = function (message) {
        $scope.toastMessage = message;
        $timeout(function () {
            $scope.toastMessage = "";
        }, 3000);
    };

    $scope.login = function () {
        const user = $scope.users.find(
            (u) => u.username === $scope.user.username && u.password === $scope.user.password
        );
        if (user) {
            $scope.showToast("Login berhasil!");
            alert("Login successful!");
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('currentUser', JSON.stringify(user));
            $location.path('/dashboard');
        } else {
            alert("Invalid username or password.");
        }
    };
    
    $scope.register = function () {
        if ($scope.user.password === $scope.user.confirmPassword) {
            $scope.users.push({ username: $scope.user.username, password: $scope.user.password });
            localStorage.setItem('users', JSON.stringify($scope.users));
            $scope.showToast("Registrasi berhasil!");
            alert("Registrasi berhasil!!");
            $scope.user = {username: '', password: '', confirmPassword: '' };
            $location.path('/'); 
        } else {
            alert("Passwords do not match");
        }
    };
    
    $scope.goToRegister = function () {
        $location.path('/register');
    };

    $scope.goToLogin = function () {
        $location.path('/');
    };
});