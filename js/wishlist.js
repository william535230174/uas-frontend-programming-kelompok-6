myApp.controller('WishlistController', ['$scope', function($scope) {
    $scope.wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; 

    $scope.addToCart = function(item) { 
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        let existingProduct = cart.find(product => product.name === item.name); 

        if (existingProduct) { 
            existingProduct.quantity += 1; 
        } else { 
            cart.push({
                name: item.name,
                price: item.price, 
                quantity: 1, 
                image: item.image
            }); 
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        $scope.removeFromWishlist(item) 
    }; 

    $scope.removeFromWishlist = function(item) { 
        let index = $scope.wishlist.indexOf(item); 
        if (index !== -1) {
            $scope.wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify($scope.wishlist)); 
        }
    }; 
}]); 