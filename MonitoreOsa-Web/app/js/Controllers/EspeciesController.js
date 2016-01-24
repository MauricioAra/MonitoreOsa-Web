App.controller('EspeciesCtrl',function($state,$scope, $http, Upload,EspecieService){
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  especie = {};
  $scope.listaEspecies = EspecieService.list();
  $scope.files = {};
  $scope.especie = {}
  $scope.especie.imagen = {};
  var file;
  var imagenBase64 = {};
  var id;
  var rev;

  $scope.uploader = {};

  $http.get("https://mmullerc.cloudant.com/especies/_all_docs?&include_docs=true").then(function(response) {
    for(var i = 0; i < response.data.rows.length; i++){
        especie = response.data.rows[i].doc;
        $scope.listaEspecies[i] = especie;
      }
  });

  $scope.numberOfPages=function(){
    return Math.ceil($scope.listaEspecies.length/$scope.pageSize);
  }
  //
  $scope.registrar = function(){
    $('#modal1').openModal();
  }
  //
  $scope.onFileSelect = function ($files) {

      $scope.files = $files;
      for (var i = 0; i < $scope.files.length; i++) {
           file = $scope.files[i];
          }
  }
  //
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
  //Eliminar especie
  $scope.eliminar = function(especie){
       id = especie._id;
       rev = especie._rev;
       $('#confirmacion').openModal();
  }
  //Si
  $scope.si = function(){
      $http.delete("https://mmullerc.cloudant.com/especies/"+id+"?rev="+rev+"").then(function(response) {
        $('#confirmacion').closeModal();
        $scope.listaEspecies = EspecieService.list();
    });
  }
  //No
  $scope.no = function(){
      $('#confirmacion').closeModal();
  }
  //Ver especie
  $scope.verEspecie = function(especie){
      $('#informacion').openModal();
      $scope.nombreModal = especie.nombre;
      $scope.cientificoModal = especie.nombre_cientifico;
      $scope.descripcionModal = especie.descripcion;
      $scope.tipoModal =  especie.tipo;
  }
  //Registrar especie
  $scope.aceptarRegistro = function(){
    var nombre = document.getElementById("nombre_especie").value;
    var nombre_cientifico = document.getElementById("nombre_cientifico").value;
    var habitat = document.getElementById("habitat").value;
    var descripcion = document.getElementById("descripcion").value;
    var clase = document.getElementById("sltClases");
    var clase_info = clase.options[clase.selectedIndex].value;

    var id = new Date().toISOString();;

   var base64result = imagenBase64.split(',')[1];

    var objRegistro = {
      "_id":id,
      "nombre":nombre,
      "nombre_cientifico":nombre_cientifico,
      "habitat":habitat,
      "descripcion":descripcion,
      "tipo":clase_info,
      "_attachments":{
        "imagen":{
          "content_type":"image/png",
          "data":base64result
        }
      }
    }
    $http.post("https://mmullerc.cloudant.com/especies/", objRegistro).then(function(response) {

      $('#registrado').openModal();
      $scope.listaEspecies = EspecieService.list();
      console.log(response);

    });
  }
  $scope.eliminar = function(especie){
    //
    $http.delete("https://mmullerc.cloudant.com/especies/"+especie._id+"?rev="+especie._rev+"").then(function(response) {
    //
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
