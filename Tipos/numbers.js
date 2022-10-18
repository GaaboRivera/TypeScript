"use strict";
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
    avengers = Number('55A'); /** Response => NaN 'NaN es considerado un numero' */
    console.log({ avengers: avengers });
})();
