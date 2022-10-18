"use strict";
(function () {
    //* Parametro por defecto                                           ↓↓↓
    var fullName = function (firtName, pathName, upper) {
        if (upper === void 0) { upper = false; }
        return upper ? "".concat(firtName, " ").concat(pathName).toUpperCase() : "".concat(firtName, " ").concat(pathName);
    };
    var name = fullName('Gabo', 'Rivera', true);
    console.log(name);
})();
