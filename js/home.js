myApp.controller('HomeController', function($scope, $location) { 
    $scope.search = ""; 

    $scope.searchItem = function() { 
        if ($scope.search) { 
            $location.path('/search/' + $scope.search); 
        }
    };
});