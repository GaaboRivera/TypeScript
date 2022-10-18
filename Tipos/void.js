"use strict";
(function () {
    // * Undefined es diferente a null
    // * Null es diferente a void
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
