// console.log(arguments);
// console.log(require('module').wrapper);

//module.exports
const C1 = require('./test-module-1');
const calc1 = new C1();
console.log(calc1.add(1, 2))

//exports
const {add, multyply, devide} = require('./test-module-2');
console.log(multyply(2, 2));

//cashing
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();


