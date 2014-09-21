function envioemailCtrl($scope,$http,$window){
    
    var $ = jQuery;
    
    $scope.enviar = function(){
        $http.post('/emailverao2015',$scope.envio).success(function()
        {
            
        });
    }
    
    var init = function(){
        $scope.envio = {email:''};
    };
    
    init();
    
}