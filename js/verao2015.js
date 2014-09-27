function envioemailCtrl($scope,$http,$window){
    
    $scope.enviar = function(){
        show();
        
        // Verifica se o browser do usuario tem suporte a Geolocation
        if ( navigator.geolocation ){
            navigator.geolocation.getCurrentPosition( function( posicao ){
                console.log( posicao.coords.latitude, posicao.coords.longitude );
            });
        }

        $http.post('/emailverao2015',$scope.envio).success(function(retorno)
        {
            if(retorno){   
                        $scope.show = {sucesso  : true,
                                       alerta   : true};
                        }
            else {
                        $scope.show = {sucesso  : false,
                                       alerta   : false};
                 }
        });
                             };
    
    var init = function(){
        $scope.envio = {email:''};
        show();
    };
    
    var show = function(){
        $scope.show  = {sucesso : false,
                        alerta  : true};    
    };
    
    init();
    
};