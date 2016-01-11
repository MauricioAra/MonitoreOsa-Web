App.controller('EspeciesCtrl',function($state,$scope, $http, Upload){
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  especie = {};
  $scope.listaEspecies = [];
  $scope.files = {};
  $scope.especie = {}
  $scope.especie.imagen = {};
  var file;
  var imagenBase64 = {};

  $scope.uploader = {};

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

  $scope.onFileSelect = function ($files) {


      $scope.files = $files;
      for (var i = 0; i < $scope.files.length; i++) {
           file = $scope.files[i];
          }
  }

  $scope.convertirImagen = function(){
    $scope.processFiles = function(files){
      angular.forEach(files, function(flowFile, i){
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          var uri = event.target.result;
            imagenBase64 = uri;
        };
        fileReader.readAsDataURL(flowFile.file);
      });
    };
  }

  $scope.aceptarRegistro = function(){

    var nombre = document.getElementById("nombre_especie").value;
    var nombre_cientifico = document.getElementById("nombre_cientifico").value;
    var descripcion = document.getElementById("descripcion").value;
    var clase = document.getElementById("sltClases");
    var clase_info = clase.options[clase.selectedIndex].value;

    var id = nombre;

   var base64result = imagenBase64.split(',')[1];

    var objRegistro = {
      "_id":id,
      "nombre":nombre,
      "nombre_cientifico":nombre_cientifico,
      "descripcion":descripcion,
      "tipo":clase_info,
      "_attachments":{
        "imagen":{
          "content_type":"image/png",
          "data":base64result
        }
      }
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
