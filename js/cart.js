myApp.controller('CartController', ['$scope', function ($scope) { 
        $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];

        $scope.calculateTotals = function() { 
            $scope.subtotal = $scope.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            $scope.tax = $scope.subtotal * 0.1;
            $scope.shippingFee = $scope.cart.length > 0 ? 20000 : 0;
            $scope.total = $scope.subtotal + $scope.tax + $scope.shippingFee; 
        }; 

        $scope.formatCurrency = function (amount) {
            return new Intl.NumberFormat('id-ID', { 
                style: "currency",
                currency: "IDR", 
                minimumFractionDigits: 0
            }).format(amount).replace('Rp','IDR'); 
        };

        $scope.removeFromCart = function (productName) { 
            $scope.cart = $scope.cart.filter(item => item.name !== productName); 
            $scope.saveCart(); 
            $scope.calculateTotals(); 
        }; 

        $scope.updateQuantity = function (item) { 
            if (item.quantity > 1) {
                item.quantity = 1; 
            }
            $scope.saveCart(); 
            $scope.calculateTotals(); 
        }; 

        $scope.saveCart = function() { 
            localStorage.setItem('cart', JSON.stringify($scope.cart));
        }; 

        $scope.calculateTotals(); 
    }]); 