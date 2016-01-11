App.controller('MiPerfilCtrl',function($state,$scope){
    $scope.nombre = localStorage.getItem('nombre');
    $scope.apellido = localStorage.getItem('apellido');
    $scope.cedula = localStorage.getItem('cedula');
    $scope.correo = localStorage.getItem('correo');
    $scope.telefono = localStorage.getItem('telefono');
});
