App.controller('ReporteAvistamientoCtrl',function($state,$scope,AvistamientoService,$timeout){

  //
  var init = function () {
    $scope.avistamientos  = AvistamientoService.list();

  };
  init();
  //
  $timeout(function() {
    $scope.ocultar = true;
  }, 3000);
  //
  $scope.exportar = function () {
         var blob = new Blob([document.getElementById('exportable').innerHTML], {
             type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
         });
         saveAs(blob, "Reporte_Avistamientos.xls");
  };
  //
  $scope.volver = function(){
    $state.go('app.avistamientos');
  };
});
