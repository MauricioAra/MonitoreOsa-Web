App.controller('IniciarSesionCtrl',function($http,$rootScope,$state,$scope,UsuarioService,md5){
  //
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

  //"https://mmullerc.cloudant.com/usuarios/_all_docs?&include_docs=true"
  //var contrasenaHash = md5.createHash($scope.contrasena);
  $scope.go = function(){
    var contrasenaHash = md5.createHash($scope.contrasena);
    $http.get("https://mmullerc.cloudant.com/usuarios/"+$scope.correo+"")
    .success(function(response) {
      if(response.status = 200){
          if(response.contrasena == contrasenaHash){
            localStorage.setItem("id", response._id);
            localStorage.setItem("nombre", response.nombre);
            localStorage.setItem("apellido",response.apellido);
            localStorage.setItem("cedula",response.cedula);
            localStorage.setItem("telefono",response.telefono);
            localStorage.setItem("correo",response.correo);
            localStorage.setItem("rol",response.rol);
            localStorage.setItem("fecha",response.fecha_nacimiento);
            localStorage.setItem("contrasena",response.contrasena);
            $state.go('app.avistamientos');
          }else{
            $state.go('page.lock');
          }
      }
    })
    .error(function(err){
      if(err.error == "not_found"){
        alert("usuario incorrecto");
      }
    });
  }

});
