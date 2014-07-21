var verao2015App = angular.module('verao2015App',[]);

verao2015App.controller('envioemailCtrl', function($scope,$http){
    
    var $ = jQuery;
    
    $scope.enviar = function(){
        $http.post('/emailverao2015',$scope.envio).success(function(){
            init();
        });
    }
    
    var init = function(){
        $scope.envio = {email:''};
    };
    
    init();
    
}