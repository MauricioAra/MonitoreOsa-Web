App.controller('AvistamientoCtrl',function($http,$state,$scope,AvistamientoService){
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.avistamientos = AvistamientoService.list();
  var _id;
  var _rev;
  //
  $scope.numberOfPages=function(){
    return Math.ceil($scope.avistamientos.length/$scope.pageSize);
  }
  //
  $scope.exportar = function () {
    $state.go('page.reporteAvistamiento');
    $('.tooltipped').tooltip('remove');
  };
  //
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 40});
  });
  //
  $scope.eliminar = function(avistamiento){

    $('#confirmacion').openModal();
    _id = avistamiento._id;
    _rev = avistamiento._rev;
  }
  //
  $scope.no = function(){
    $('#confirmacion').closeModal();
  }
  //
  $scope.si = function(){
    $http.delete("https://monitoreosa.cloudant.com/avistamientos/"+_id+"?rev="+_rev+"").then(function(response) {
      $('#confirmacion').closeModal();
      $scope.avistamientos = AvistamientoService.list();
    });
  }
});
//
App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
