angular.module('gifApp', [])
  .controller('mainController', function($scope, mainService, $timeout) {

    $scope.search = function(text) {
      var textArray = text.split(" ");
      for(var i = 0; i < textArray.length; i++) {
        if(textArray[i+1]) {
          textArray[i] += "+";
        }
      }
      var item = textArray.join("");
      mainService.search(item).then(function(response) {
        if(response.data.data.length !== 0) {
            $scope.gifs = response.data.data;
            $scope.searchTerm = text;
        } else {
          toastr.error('No Results');
        }
        $scope.text = "";

      })
    }

    $scope.copied = function() {
      toastr.options = {
  "closeButton": false,
  "debug": true,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
toastr.success('Copied to clipboard!')
    }

}); //end
