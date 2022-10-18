"use strict";
(function () {
    //* Argumentos REST que es el resto de argumentos que llegan a una funcion
    var fullname = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullname('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
