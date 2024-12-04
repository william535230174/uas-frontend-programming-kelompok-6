myApp.controller('HomeController', function($scope, $location) { 
    $scope.search = ""; 

    $scope.searchItem = function() { 
        if ($scope.search) { 
            $location.path('/search/' + $scope.search); 
        }
    };
});

myApp.controller('SliderController', function ($scope, $timeout) { 
    $timeout(function() { 
        const swiper = new Swiper('.swiper', { 
            loop: true, 
            autoplay: { 
                delay: 2500, 
                disableOnInteraction: false, 
            }, 
            pagination: { 
                el: '.swiper-pagination', 
                clickable: true, 
            }, 
        }); 
    }, 0); 
}); 
