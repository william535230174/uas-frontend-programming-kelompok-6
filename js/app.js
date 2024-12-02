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
            .otherwise({ redirectTo: '/' });
    }
]);

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
});