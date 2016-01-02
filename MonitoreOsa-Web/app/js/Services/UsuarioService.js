App.service('UsuarioService', function ($http) {
    //Variable global que maneja el id dinamico de los objetos nuevos
    //Arreglo de objetod empleados
    var usuarios =  [
       {'id':0, 'nombre':'Mauricio', 'correo':'maraicah.ac.cr', 'telefono':'85310413','contrasena':'mauricio'}
     ]
    this.getUsuario = function (pcorreo, pcontrasena) {
        for (i in usuarios) {
            if (usuarios[i].correo == pcorreo && usuarios[i].contrasena == pcontrasena) {
                return usuarios[i];
            }
        }
    }
});
