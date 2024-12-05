var myApp = angular.module('myApp', ['ngRoute']); 

myApp.config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix(''); 
        $routeProvider
            .when('/', { 
                controller: 'HomeController',
                templateUrl: 'view/home.html',
            })
            .when('/cart', {
                controller: 'CartController',
                templateUrl: 'view/cart.html',
            })
            .when('/wishlist', {
                controller: 'WishlistController',
                templateUrl: 'view/wishlist.html',
            })
            .when('/checkout', { 
                controller: 'CheckoutController', 
                templateUrl: 'view/checkout.html',
            })
            .when('/product', { 
                controller: 'ProductController as ctrl', 
                templateUrl: 'view/product.html',
                controllerAs: 'ctrl'
            })
            .when('/login', { 
                controller: 'AuthController as ctrl', 
                templateUrl: 'view/login.html',
            })
            .when('/register', { 
                controller: 'AuthController as ctrl', 
                templateUrl: 'view/register.html',
            })
            .otherwise({ redirectTo: '/' });
    }
]); 