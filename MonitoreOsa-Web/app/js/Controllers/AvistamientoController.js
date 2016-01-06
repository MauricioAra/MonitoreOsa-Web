App.controller('AvistamientoCtrl',function($state,$scope,AvistamientoService){
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.avistamientos = AvistamientoService.list();

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
      AvistamientoService.eliminar(avistamiento._id,avistamiento._rev);
  }
});
//
App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
