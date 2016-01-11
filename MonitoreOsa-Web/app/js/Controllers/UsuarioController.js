App.controller('UsuarioCtrl',function($state,$scope,UsuarioService,md5,$http){
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.listaUsuarios = UsuarioService.list();

  //
  $scope.numberOfPages=function(){
    return Math.ceil($scope.listaUsuarios.length/$scope.pageSize);
  }
  //
  $scope.registrar = function(){
    $('#modal1').openModal();
  }

  $scope.prueba = function(){
    $('#registrado').openModal();
  }

  $scope.aceptarRegistro = function(){
    var cedula = $scope.cedula;
    var nombre = $scope.nombre;
    var apellido = $scope.apellido;
    var correo = $scope.correo;
    var telefono = $scope.telefono;
    var rol = "General";
    var contrasenaHash = md5.createHash($scope.contrasena);

    var objUsuario = {
      "nombre":nombre,
      "apellido":apellido,
      "cedula":cedula,
      "telefono":telefono,
      "correo":correo,
      "rol":rol,
      "contrasena":contrasenaHash
    }
    $http.post("https://mmullerc.cloudant.com/usuarios/", objUsuario).then(function(response) {
        $scope.listaUsuarios = UsuarioService.list();
        $('#registrado').openModal();
    });
  }
});

App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
