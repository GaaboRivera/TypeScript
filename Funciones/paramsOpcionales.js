"use strict";
(function () {
    //* Si colocacamos el '?' despues del parametro que recibe
    //* la funcion se esta dando por hecho que el parametro es opcional
    //*                                        ↓
    var fullName = function (firtName, pathName) {
        return "".concat(firtName, " ").concat(pathName || 'No lastName');
    };
    var name = fullName('Gabo');
    console.log(name);
})();
