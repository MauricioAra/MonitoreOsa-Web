App.controller('InicioController',function($state,$scope,AvistamientoService,$timeout){

  //Parallax go
  $(document).ready(function(){
    $('.parallax').parallax();
  });
  //
  $scope.avistamientos = function(){
    $state.go('app.avistamientos');
  }
  //
  $scope.especies = function(){
    $state.go('app.crud-especies');
  }
  
});
