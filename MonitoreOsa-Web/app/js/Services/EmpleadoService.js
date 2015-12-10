/**
* created by Mauricio Araica v1.0
*/
//Servicio EmpleadosService donde se encuentra la funcionalidad
//del objeto como sus CRUD
App.service('EmpleadosService', function ($http) {
    //Variable global que maneja el id dinamico de los objetos nuevos
    var uid = 1;
    //Arreglo de objetod empleados
    var empleados =  [
       {'id':0, 'nombre':'Mauricio', 'correo':'maraicah.ac.cr', 'telefono':'85310413'}
     ]
     //Metodo save que cumple 2 funciones, tanto guardar como modificar
    this.save = function (empleado) {
      //Valida si el empleado trae id null para hacer un nuevo registro
        if (empleado.id == null) {
            empleado.id = uid++;
            empleados.push(empleado);
        } else {
          //Si el id ya esta, modifica el objeto : vel linea 23
            for (i in empleados) {
                if (empleados[i].id == empleado.id) {
                    empleados[i] = empleado;
                }
            }
        }
    }
    //Metodo encargado de obtener un objeto, esto con el fin de mostrar solamente
    //un empleado
    this.get = function (id) {
        for (i in empleados) {
            if (empleados[i].id == id) {
                return empleados[i];
            }
        }
    }
    //Metodo encargado de eliminar un objeto del Arreglo
    //con la directiva splice : http://www.w3schools.com/jsref/jsref_splice.asp
    this.delete = function (id) {
        for (i in empleados) {
            if (empleados[i].id == id) {
                empleados.splice(i, 1);
            }
        }
    }
    //Metodo encargado de listar todos los empleados

    this.list = function () {
      var especie = {};
      var listaEspecies = {};
      $http.get("https://couchdb-1623e1.smileupps.com/avistamientos/_all_docs?&include_docs=true").then(function(response) {
        for(var i = 0; i < response.data.rows.length; i++){
            especie = response.data.rows[i].doc;
            listaEspecies[i] = especie;
          }
      });
      return listaEspecies;
    }
});
