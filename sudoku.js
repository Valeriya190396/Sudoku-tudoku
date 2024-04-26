const fs = require('fs')
function read(num) {
	const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n')
	const gamePuzzle = puzzles[num - 1].split('')
	const newBoard = [
		[gamePuzzle.slice(0, 9)],
		[gamePuzzle.slice(9, 18)],
		[gamePuzzle.slice(18, 27)],
		[gamePuzzle.slice(27, 36)],
		[gamePuzzle.slice(36, 45)],
		[gamePuzzle.slice(45, 54)],
		[gamePuzzle.slice(54, 63)],
		[gamePuzzle.slice(63, 72)],
		[gamePuzzle.slice(72, 81)],
	]
	return newBoard
}
const read1 = read(1)

function solve(table) {
	return table
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции read.
	 * Возвращает игровое поле после попытки его решить.
	 */
}
function isSolved() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Возвращает булевое значение — решено это игровое поле или нет.
	 */
}

function prettyBoard() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Выводит в консоль/терминал судоку.
	 * Подумай, как симпатичнее его вывести.
	 */
}
