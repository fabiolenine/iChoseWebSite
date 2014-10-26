// js/hotsiteController.js
angular.module('hotsiteController',[])

    //inject the Event service factory into our controller
    .controller('hotsiteCTRL', function($scope, $http, HotSites) {
        
//        $scope.latitude   = -35.717680;
//        $scope.longitude  = -9.644430;
        
//        $scope.geoOptions = {   enableHighAccuracy: true,
//                                timeout: 30000,
//                                maximumAge: 3000};
    
//        $scope.geoError = function(err) {
//           switch( err.code ) {
//               case 1:
//                 // permissao negada pelo usuario
//                break;
//
//              case 2:
//                // nao foi possivel alcancar os satelites GPS
//                break;
//
//              case 3:
//                // a requisicao demorou demais para retornar
//                break;
//
//              case 0:
//                // ocorreu um erro desconhecido...
//                break;
//               }	
//            };
    
//        $scope.geoSuccess = function(pos){
//                $scope.latitude  = pos.coords.latitude;
//                $scope.longitude = pos.coords.longitude;
//            };
    
        $scope.reset = function() {
            $scope.listBalad = {};
            $scope.sacData   = {email       : '',
                                location    : {lat: $scope.latitude, lng: $scope.longitude},
                                nome        : '',
                                mensagem    : ''};
        
//            navigator.geolocation.getCurrentPosition($scope.geoSuccess,$scope.geoError,$scope.geoOptions);

            $scope.show  = {sucesso : false,
                            alerta  : true};  
        };

        $scope.reset();
    
        // List ===================================================================================
        // When landing on the page, get all events and show them
        // use the service to get all the events
        HotSites.list()
            .success(function(data) {
                console.log(data);
                $scope.listBalad = data;
            });
            
        // Insert =================================================================================
        // When submitting the add form, send the text to the node API
        $scope.enviar = function() {
//            $scope.sacData.location = {lat: $scope.latitude, lng: $scope.longitude};
        
//            navigator.geolocation.getCurrentPosition($scope.geoSuccess,$scope.geoError,$scope.geoOptions);
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same event anymore
            
            if(!$.isEmptyObject($scope.sacData)) {
                
                // call the insert function from our service (returns a promise object)
                
                HotSites.sacemail($scope.sacData)
                
                // if successful creation, call our get function to get all the new events
                
                .success(function(data) {
//                    if(data){   
//                        $scope.show = {sucesso  : true,
//                                       alerta   : true};
//                    }
//                    else {
//                        $scope.show = {sucesso  : false,
//                                       alerta   : false};
//                    }
                    $scope.reset(); // clear the form so our user is ready to enter another
                });
            }
        };
    });