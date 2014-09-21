function envioemailCtrl($scope,$http,$window){
    
    var $ = jQuery;
    
    $scope.enviar = function(){
        $http.post('/emailverao2015',$scope.envio).success(function(retorno)
        {
            if(retorno=200) {   
                $scope.show = {sucesso  : true,
                                alerta  : true};
            }
            else
            {
                $scope.show = {sucesso  : false,
                               alerta   : false};
            }
        });
    }
    
    var init = function(){
        $scope.envio = {email:''};
        $scope.show  = {sucesso : false,
                        alerta  : true};
    };
    
    init();
    
}