App.controller('EspeciesCtrl',function($state,$scope, $http){
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  especie = {};
  $scope.listaEspecies = [];

  $http.get("https://mmullerc.cloudant.com/mamiferos/_all_docs?&include_docs=true").then(function(response) {

    for(var i = 0; i < response.data.rows.length; i++){
        especie = response.data.rows[i].doc;
        $scope.listaEspecies[i] = especie;
      }
  });

  $scope.numberOfPages=function(){
    return Math.ceil($scope.listaEspecies.length/$scope.pageSize);
  }

  $scope.registrar = function(){
    $('#modal1').openModal();
  }

  $scope.aceptarRegistro = function(){
    var nombre = document.getElementById("nombre_especie").value;
    var nombre_cientifico = document.getElementById("nombre_cientifico").value;
    var descripcion = document.getElementById("descripcion").value;
    var clase = document.getElementById("sltClases");
    var clase_info = clase.options[clase.selectedIndex].value;

    var _id = nombre;

    var objRegistro = {
      "_id":_id,
      "nombre":nombre,
      "nombre_cientifico":nombre_cientifico,
      "descripcion":descripcion,
      "tipo":clase_info
    }
    
    $http.post("https://mmullerc.cloudant.com/mamiferos/", objRegistro).then(function(response) {

      console.log(response);

    });
  }

  $(document).ready(function() {
    $('select').material_select();
  });


});

App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
