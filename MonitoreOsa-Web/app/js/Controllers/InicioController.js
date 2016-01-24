App.controller('InicioController',function($rootScope,$state,$scope,AvistamientoService,$timeout,UsuarioService){
  //
  var init = function () {

    if(localStorage.getItem('rol') == "General"){
      $scope.mostrar = !$scope.mostrar;
    }
  };
  init();
  //Parallax go
  $(document).ready(function(){
    $('.parallax').parallax();
    //
    $(".button-collapse").sideNav();
    //
    $('.dropdown-button').dropdown(
      {
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
    );
  });
  //
  $scope.avistamientos = function(){
    $state.go('app.avistamientos');
  }
  //
  $scope.especies = function(){
    $state.go('app.crud-especies');
  }
  //
  $scope.miPerfil = function(){
    $state.go('app.miPerfil');
  }
  //
  $scope.usuarios = function(){
    $state.go('app.usuarios');
  }
  //
  $scope.salir = function(){
    localStorage.setItem("id", "");
    localStorage.setItem("nombre", "");
    localStorage.setItem("apellido","");
    localStorage.setItem("cedula","");
    localStorage.setItem("telefono","");
    localStorage.setItem("correo","");
    localStorage.setItem("contrasena","");
    localStorage.setItem("rol","");
    $state.go('page.inicio');
  }
});
