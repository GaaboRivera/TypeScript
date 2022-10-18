"use strict";
(function () {
    var a = 10;
    var b = 10;
    function sayHello(msg) {
        console.log(msg);
    }
    sayHello('Hola Mundo');
})();
(function () {
    var sumar = function (a, b) { return a + b; };
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFuncNumber;
    myFuncNumber = addNumbers;
    console.log(myFuncNumber(1, 2));
    var myFuncString;
    myFuncString = greet;
    console.log(myFuncString('Gabo'));
    var myFuncString2;
    myFuncString2 = saveTheWorld;
    console.log(myFuncString2());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activeBatisignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activeBatisignal);
})();
(function () {
    var fullName = function (firtName, pathName) {
        return "".concat(firtName, " ").concat(pathName || 'No lastName');
    };
    var name = fullName('Gabo');
    console.log(name);
})();
(function () {
    var fullName = function (firtName, pathName, upper) {
        if (upper === void 0) { upper = false; }
        return upper ? "".concat(firtName, " ").concat(pathName).toUpperCase() : "".concat(firtName, " ").concat(pathName);
    };
    var name = fullName('Gabo', 'Rivera', true);
    console.log(name);
})();
(function () {
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
(function () {
    var fullName = function (firtName, pathName) {
        return "".concat(firtName, " ").concat(pathName);
    };
    var name = fullName('Gabo', 'Rivera');
    console.log(name);
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }
    ];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['supervelocidad', 'viajar en el tiempo']
    };
    flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['supervelocidad', 'viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash);
})();
(function () {
    var aquaman = {
        name: 'Alen Tuds',
        age: 45,
        powers: ['supervelocidad']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['supervelocidad']
    };
})();
(function () {
    var myCustomVariable = 'Gabo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Gabo',
        age: 33,
        powers: ['code']
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 132;
    var exists;
    var power;
    avenger = 'Dr strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.485168854;
    console.log(avenger.toFixed(3));
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numStrBool = [1, 2, 3, '4', 5, 6, 7, 8, 9, 10, false];
    numStrBool.push(true);
    console.log(numStrBool);
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);
    var strings = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    console.log(strings);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (msg) {
        throw new Error(msg);
    };
    error('auxilio');
    console.log('ya no llega aqui');
})();
(function () {
    var nada = undefined;
    console.log(nada);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'batman';
    var linternaVerde = "Linterna Verde";
    var superman = "Superman";
    console.log(batman.toLocaleUpperCase());
    console.log("I'm ".concat(batman));
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'no da el ancho');
})();
(function () {
    var hero = ['dr strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map