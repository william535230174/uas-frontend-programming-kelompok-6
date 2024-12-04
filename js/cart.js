myApp.controller('CartController', ['$scope', function ($scope) { 
        $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];

        $scope.calculateTotals = function() { 
            $scope.subtotal = $scope.cart.reduce((sum, item) => {
                console.log("Item:", item); 
                const price = parseFloat(item.price) || 0; 
                const quantity = parseInt(item.quantity) || 0;
                return sum + (price * quantity);
            }, 0);

            $scope.tax = $scope.subtotal * 0.1;
            $scope.shippingFee = $scope.cart.length > 0 ? 20000 : 0;
            $scope.total = $scope.subtotal + $scope.tax + $scope.shippingFee; 
        }; 

        $scope.formatCurrency = function (amount) {
            console.log("Formatting amount: ", amount);

            if (!amount || isNaN(amount)) { 
                amount = 0;
            }
            return new Intl.NumberFormat('id-ID', { 
                style: "currency",
                currency: "IDR", 
                minimumFractionDigits: 0
            }).format(amount).replace('Rp','IDR'); 
        };

        $scope.removeItem = function (itemName) { 
            $scope.cart = $scope.cart.filter(function (item) { 
                return item.name !== itemName;
            }); 
            $scope.updateQuantity(); 
        }; 

        $scope.updateQuantity = function () { 
            $scope.subtotal = $scope.cart.reduce(function (total, item) { 
                return total + item.price * item.quantity; 
            }, 0); 
            $scope.shippingFee = $scope.cart.length > 0 ? 20000 : 0; 
            $scope.tax = $scope.subtotal * 0.1; 
            $scope.totalPayment = $scope.subtotal + $scope.tax + $scope.shippingFee; 
            localStorage.setItem('cart', JSON.parse($scope.cart)); 
        }; 

        $scope.initCart = function () {
            const savedCart = localStorage.getItem('cart'); 
            $scope.cart = savedCart ? JSON.parse(savedCart) : [];
            $scope.updateQuantity(); 
        }; 

        $scope.initCart(); 
        $scope.saveCart = function() { 
            localStorage.setItem('cart', JSON.stringify($scope.cart));
        }

        $scope.calculateTotals(); 
    }]); 