function envioemailCtrl($scope,$http,$window){
    
    var $ = jQuery;
    
    $scope.enviar = function(){
        show();
        $http.post('/emailverao2015',$scope.envio).success(function(retorno)
        {
            console.log(retorno);
            if(retorno){   
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
        show();
    };
    
    var show = function(){
        $scope.show  = {sucesso : false,
                        alerta  : true};    
    };
    
    init();
    
}