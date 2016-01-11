App.controller('IniciarSesionCtrl',function($rootScope,$state,$scope,UsuarioService,md5){
  //
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

  //
  $scope.go = function(){
    //alert(md5.createHash($scope.contrasena));
    var contrasenaHash = md5.createHash($scope.contrasena);
    var entro = validar(contrasenaHash);
    if(entro == true){
      $state.go('app.avistamientos');
    }else{
      $state.go('page.lock');
    }
  }
  function validar(pcontrasena){
    var retro = false;
    angular.forEach($rootScope.usuarios, function(usuario, key){
    if(usuario.correo == $scope.correo && usuario.contrasena == pcontrasena){
        localStorage.setItem("id", usuario._id);
        localStorage.setItem("nombre", usuario.nombre);
        localStorage.setItem("apellido",usuario.apellido);
        localStorage.setItem("cedula",usuario.cedula);
        localStorage.setItem("telefono",usuario.telefono);
        localStorage.setItem("correo",usuario.correo);
        localStorage.setItem("contrasena",usuario.contrasena);
        retro = true;
      }
    });
    return retro;
  }
});
//localStorage.setItem("id", value._id);
//localStorage.setItem("nombre", value.nombre);
//localStorage.setItem("apellido",value.apellido);
//localStorage.setItem("cedula",value.cedula);
//localStorage.setItem("telefono",value.telefono);
//localStorage.setItem("correo",value.correo);
//localStorage.setItem("contrasena",value.contrasena);
//$state.go('app.avistamientos');
//$state.go('page.lock');
