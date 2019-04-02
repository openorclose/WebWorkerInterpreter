/*
Similar to how transpiler works, we will store all globals somewhere in a global variable.
In this case I just use the global variable global.
 */

const b = 1123;
global.b = 1123;
undefined;
