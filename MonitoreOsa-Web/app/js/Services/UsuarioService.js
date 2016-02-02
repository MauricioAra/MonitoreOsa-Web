App.service('UsuarioService', function ($http,$state) {
    //
    this.list = function () {
      var usuario = {};
      var listaUsuarios = [];
      $http.get("https://monitoreosa.cloudant.com/usuarios/_all_docs?&include_docs=true").then(function(response) {
        for(var i = 0; i < response.data.rows.length; i++){
            usuario = response.data.rows[i].doc;
            listaUsuarios[i] = usuario;
          }
      });
      return listaUsuarios;
    }
    //

});
