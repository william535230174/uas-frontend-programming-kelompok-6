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
            .when('/about', {
                controller: 'NoteController',
                templateUrl: 'view/view2.html',
            })
            .when('/edit', {
                controller: 'EditController',
                templateUrl: 'view/view3.html',
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