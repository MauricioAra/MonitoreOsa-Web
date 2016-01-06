App.service('EspecieService',function($http){

  this.list = function () {
    especie = {};
    listaEspecies = {};

    $http.get("https://mmullerc.cloudant.com/mamiferos/_all_docs?&include_docs=true").then(function(response) {

      for(var i = 0; i < response.data.rows.length; i++){
          especie = response.data.rows[i].doc;
          $scope.listaEspecies[i] = especie;
        }
        console.log($scope.listaEspecies);

    });

});
