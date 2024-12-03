myApp.controller('CheckoutController', ['$scope', function($scope) { 
    $scope.data = { 
        fullName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postCode: '',
        cardName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: ''
    }; 

    $scope.showError = false; 

    $scope.submitForm = function() { 
        var allFilled = true; 
        angular.forEach($scope.data, function (value) { 
            if (!value || (typeof value === 'string' && value.trim() === '')) {
                allFilled = false;
        }
        }); 

        if (allFilled) {
            localStorage.removeItem('cart'); 
            window.location.href = 'thank-you.html'; 
        } 
    };
}]);