const { log } = require('console');
const func = require('./sudoku.js')

console.log(func.read(2));
console.log(func.solve(func.read(2)));
console.log(func.isSolved(func.solve(func.read(2))));
console.log(func.prettyBoard(func.solve(func.read(2))));
