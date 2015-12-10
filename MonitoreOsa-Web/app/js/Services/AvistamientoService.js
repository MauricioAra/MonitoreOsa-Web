App.service('AvistamientoService',function($http){

  this.list = function () {
    var avistamiento = {};
    var listaAvistamientos = [];
    $http.get("https://couchdb-1623e1.smileupps.com/avistamientos/_all_docs?&include_docs=true").then(function(response) {
      for(var i = 0; i < response.data.rows.length; i++){
          avistamiento = response.data.rows[i].doc;
          listaAvistamientos[i] = avistamiento.avistamiento;
        }
    });
    return listaAvistamientos;
  }

});
