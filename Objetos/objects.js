"use strict";
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
