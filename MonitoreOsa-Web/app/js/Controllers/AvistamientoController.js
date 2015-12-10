App.controller('AvistamientoCtrl',function($state,$scope,AvistamientoService){
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.avistamientos = AvistamientoService.list();

  $scope.numberOfPages=function(){
    return Math.ceil($scope.avistamientos.length/$scope.pageSize);
  }

  $scope.exportar = function () {
    $state.go('page.reporteAvistamiento');
    $('.tooltipped').tooltip('remove');
  };

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 40});
  });
});

App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
