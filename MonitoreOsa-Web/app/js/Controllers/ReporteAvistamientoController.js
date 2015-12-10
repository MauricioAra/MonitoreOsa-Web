App.controller('ReporteAvistamientoCtrl',function($state,$scope,AvistamientoService){

  $scope.avistamientos  = AvistamientoService.list();
  $scope.exportar = function () {
         var blob = new Blob([document.getElementById('exportable').innerHTML], {
             type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
         });
         saveAs(blob, "Reporte_Avistamientos.xls");
  };
  $scope.volver = function(){
    $state.go('app.avistamientos');
  };
});
