/**
* created by Mauricio Araica v1.0
*/
//Controlador encargado de contener la comunicacion entre los sevicios y las vistas
//Inyecta $scope y EmpleadosService
App.controller('InicioController', function ($scope, EmpleadosService) {
    //Llamada al metodo list encontado en EmpleadosService
    $scope.avistamientos = EmpleadosService.list();
    //Funcion que se ejecuta con el evento click
    //Le envia el nuevoEmpleado al servicio
    $scope.save = function () {
        EmpleadosService.save($scope.nuevoEmpleado);
        //Se setea en null el nuevoEmpleado
        $scope.nuevoEmpleado = {};
    }
    //Funcion qu se ejecuta con el evento click
    //Recibe el id y se lo envia al servicio
    $scope.delete = function (id) {
        EmpleadosService.delete(id);
        if ($scope.nuevoEmpleado.id == id) $scope.nuevoEmpleado = {};
    }
    //funcion que se ejecuta con el evento click
    //Recibe el id y manda a traer el objeto para mostrarlo en el formulario : angular.copy https://docs.angularjs.org/api/ng/function/angular.copy
    $scope.edit = function (id) {
        $scope.nuevoEmpleado = angular.copy(EmpleadosService.get(id));
    }

})
