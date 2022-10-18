"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    //* let myFunction: Function;
    //* myFunction = 10;
    //* console.log(myFunction)
    //* Funcion para que solo acepte numeros y retorne un numero
    var myFuncNumber;
    myFuncNumber = addNumbers;
    console.log(myFuncNumber(1, 2));
    //* Funcion para que solo acepte string y retorne un string
    var myFuncString;
    myFuncString = greet;
    console.log(myFuncString('Gabo'));
    var myFuncString2;
    myFuncString2 = saveTheWorld;
    console.log(myFuncString2());
})();
