App.service('AvistamientoService',function($http){

  //
  this.list = function () {
    var avistamiento = {};
    var listaAvistamientos = [];
    $http.get("https://monitoreosa.cloudant.com/avistamientos/_all_docs?&include_docs=true").then(function(response) {
      for(var i = 0; i < response.data.rows.length; i++){
          avistamiento = response.data.rows[i].doc;
          listaAvistamientos[i] = avistamiento;
        }
    });
    return listaAvistamientos;
  }

});
