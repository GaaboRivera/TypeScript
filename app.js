"use strict";
// * Inferir tipos y modo estricto
(function () {
    var a = 10;
    var b = 10; /** esto es lo correcto en TypeScript */
    function sayHello(msg) {
        console.log(msg);
    }
    sayHello('Hola Mundo');
})();
