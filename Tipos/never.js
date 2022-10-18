"use strict";
(function () {
    //* El never significa que la funcion no debe 
    //* tener un punto de retorno
    var error = function (msg) {
        throw new Error(msg);
    };
    error('auxilio');
    console.log('ya no llega aqui');
})();
