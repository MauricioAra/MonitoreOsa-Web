App.service('EspecieService',function($http){

  this.list = function () {
    especie = {};
    listaEspecies = [];

    $http.get("https://monitoreosa.cloudant.com/especies/_all_docs?&include_docs=true").then(function(response) {
        for(var i = 0; i < response.data.rows.length; i++){
            especie = response.data.rows[i].doc;
            listaEspecies[i] = especie;
        }
    });
    return listaEspecies;
  }
});
