app.controller('AuthController', function($scope, $location) {
    $scope.user = {
        username: '',
        email: '',
        password: ''
    };

    $scope.isLogin = true;

    $scope.login = function() {
        if ($scope.loginForm.$valid) {
            alert('Login successful! Username: ' + $scope.user.username);
            $location.path("/dashboard");
        } else {
            alert('Please fill out the form correctly.');
        }
    };

    $scope.register = function() {
        if ($scope.registerForm.$valid) {
            alert('Registration successful! Username: ' + $scope.user.username);
            $location.path("/dashboard");
        } else {
            alert('Please fill out the form correctly.');
        }
    };

    $scope.toggleForm = function() {
        $scope.isLogin = !$scope.isLogin;
    };
});
