function envioemailCtrl($scope,$http,$window){
    
    var $ = jQuery;
    
    $scope.enviar = function(){
        $http.post('/emailverao2015',$scope.envio).success(function(data){
            $windows.console.log(data);
        });
    }
    
    var init = function(){
        $scope.envio = {email:''};
    };
    
    init();
    
}