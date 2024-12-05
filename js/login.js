myApp.controller('AuthController', function ($scope, $location, $timeout) {
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
            $scope.showToast("Login Successful!");
            alert("Login successful!");
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '#/'
        } else {
            alert("Invalid username or password.");
        }
    };
    
    $scope.register = function () {
        if ($scope.user.password === $scope.user.confirmPassword) {
            $scope.users.push({ username: $scope.user.username, password: $scope.user.password });
            localStorage.setItem('users', JSON.stringify($scope.users));
            $scope.showToast("Registration Success!");
            alert("Registration Success!!");
            $scope.user = {username: '', password: '', confirmPassword: '' };
            window.location.href = '#/'
        } else {
            alert("Passwords do not match");
        }
    };
    
    $scope.goToRegister = function () {
        $location.path('#/register');
    };

    $scope.goToLogin = function () {
        $location.path('#/login');
    };
});
