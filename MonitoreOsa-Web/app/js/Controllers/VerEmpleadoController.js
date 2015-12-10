/**
 * Created by Mauricee on 8/20/2015.
 */
App.controller('VerEmpleadoCtrl', function ($scope, EmpleadosService,$stateParams) {
  $scope.emp = angular.copy(EmpleadosService.get($stateParams.id));
})
