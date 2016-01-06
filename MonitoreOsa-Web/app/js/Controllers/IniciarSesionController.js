App.controller('IniciarSesionCtrl',function($state,$scope,UsuarioService){
  //
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

  //
  $scope.go = function(){
    $state.go('app.avistamientos');
  }
  $scope.especies = function(){
    $state.go('app.crud-especies');
  }
});
