"use strict";

module.exports = new Proxy({}, {
        get: (target, prop) => {
            return function () {
                if(typeof arguments[0][prop] === "function"){
                    return arguments[0][prop].apply(arguments[0], [...arguments].slice(1))
                }
                else{
                    return arguments[0][prop]
                }

            };
        }
});
