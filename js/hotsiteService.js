// js/hotsiteService.js
angular.module('hotsiteService',[])

// super simple service
// each function returns a promise object

.factory('HotSites', function($http) {
    return {
        list                 : function() {
            return $http.get('/hotsite/list');
        },
        sacemail              : function(elemData) {
            return $http.post('/hotsite/sacemail', elemData);
        }
    }
});