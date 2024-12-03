myApp.controller('SearchController', function($scope, $routeParams) { 
    var query = $routeParams.query; 
    $scope.query = query;

    $scope.products = [
        { name: 'Product 1', category: 'Computer' },
        { name: 'Product 1', category: 'Laptop' },
        { name: 'Product 1', category: 'Headset' },
        { name: 'Product 1', category: 'Keyboard' },
    ]; 

    $scope.filteredProducts = $scope.products.filter(function(product) { 
        return product.name.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase()); 
    });
});