function envioemailCtrl($scope,$http,$window){
    
    $scope.enviar = function(){
        show();

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
        
        // Verifica se o browser do usuario tem suporte a Geolocation
        if ( navigator.geolocation ){
            navigator.geolocation.getCurrentPosition( function( posicao ){
                //$scope.envio.location.lat   := posicao.coords.latitude;
                //$scope.envio.location.lng   := posicao.coords.longitude;
                //console.log( $scope.envio );
                console.log(posicao.coords.latitude);
                console.log(posicao.coords.longitude);
            });
        }
        
        $scope.envio = {email:'',
                       location: {lat: posicao.coords.latitude, lng: posicao.coords.longitude}};
        show();
    };
    
    var show = function(){
        $scope.show  = {sucesso : false,
                        alerta  : true};    
    };
    
    init();
    
};