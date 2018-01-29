let magic = require("./magic");

console.log(magic.replace("azerty", "a","A"));// 'Azerty'

console.log(magic.length("hello word"));// 10

console.log(magic.trim("  javascript is awesome  "));// 'javascript is awesome'

console.log(magic.normalize("éèê", "NFD"));// 'éèê'

console.log(magic.slice([1, 2, 3, 4, 5], 2, 4));// [ 3, 4 ]