const fs = require('fs')
function read(num) {
	const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n')
	const gamePuzzle = puzzles[num - 1].split('')
	const newBoard = [
		gamePuzzle.slice(0, 9),
		gamePuzzle.slice(9, 18),
		gamePuzzle.slice(18, 27),
		gamePuzzle.slice(27, 36),
		gamePuzzle.slice(36, 45),
		gamePuzzle.slice(45, 54),
		gamePuzzle.slice(54, 63),
		gamePuzzle.slice(63, 72),
		gamePuzzle.slice(72, 81),
	]
	return newBoard
}

function solve(table) {
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			if (table[row][col] === '-') {
				for (let num = 1; num <= 9; num++) {
					if (chekingNum(table, row, col, num)) {
						table[row][col] = num.toString()
						if (solve(table)) {
							return table
						}
						table[row][col] = '-'
					}
				}
				return false
			}
		}
	}
	return table
}

function chekingNum(table, row, col, num) {
	for (let i = 0; i < 9; i++) {
		//проверка по строкам
		if (table[row][i] === num.toString()) {
			return false
		}
	}
	for (let i = 0; i < 9; i++) {
		//проверка по столбам
		if (table[i][col] === num.toString()) {
			return false
		}
	}
	const startRow = Math.floor(row / 3) * 3 //находим квaдрат a.k.a squarePants
	const startCol = Math.floor(col / 3) * 3
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (table[startRow + i][startCol + j] === num.toString()) {
				return false
			}
		}
	}

	return true
}

function isSolved(table) {
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			if (table[row][col] === '-') {
				return false
			}
		}
	}
	return `Ты молодец, ты решил судоку!`
}

function prettyBoard(table) {
	console.table(table)
}

console.log(isSolved(solve(read(2))))
prettyBoard(solve(read(2)))
