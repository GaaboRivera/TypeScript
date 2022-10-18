"use strict";
(function () {
    //* Si colocacamos el tipo de parametro que recibe
    //* la funcion se esta dando por hecho que el parametro es obligatorio
    //*                           ↓               ↓
    var fullName = function (firtName, pathName) {
        return "".concat(firtName, " ").concat(pathName);
    };
    var name = fullName('Gabo', 'Rivera');
    console.log(name);
})();
