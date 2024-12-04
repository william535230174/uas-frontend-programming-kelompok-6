myApp.controller('SearchController', function($scope, $http, $routeParams) { 
    var query = $routeParams.query; 
    $scope.query = query;

    $scope.filteredProducts = [];

    $http.get('products.json').then(function(response) { 
        $scope.products = response.data; 

        $scope.filteredProducts = $scope.products.filter(function(product) { 
            return product.name.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase()); 
        }); 
    }).catch(function(error) { 
        console.error("Error loading products:", error);
    });
});