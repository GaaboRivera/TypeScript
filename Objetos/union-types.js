"use strict";
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
