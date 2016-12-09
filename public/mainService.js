angular.module('gifApp')
  .service('mainService', function($http) {

    this.search = function(item) {
      console.log(item);
      return $http ({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?q=' + item + '&api_key=dc6zaTOxFJmzC'
      }).then(function(response) {
        return response;
      })
    }

  }); //end
