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
const read1 = read(1)
console.log(read1)
function solve(table) {
	for(let row = 0; row < 9; row++){
		for(let col = 0; col < 9; col++){
			if(table[row][col] === '-'){
				for(let num = 1; num <= 9; num++){
					if(chekingNum(num,row,col,table)){
						table[row][col] === num
						if(solve(table)){
							return true
						}
						table[row][col] === '-'
					}
					
				}
				return false
			}
			
		}
	
	}
	return true
}


function chekingNum(num,row,col,table){      
	for(let i = 0; i < 9; i++){     //проверка по строкам
		if(table[row][i] === num){
			return false
		}
	}
	for(let i = 0; i < 9; i++){     //проверка по столбам
		if(table[i][col] === num){
			return false
		}
	}
		const startRow = Math.floor(row / 3) * 3     //находим квдрат a.k.a squarePants
		const startCol = Math.floor(col / 3) * 3  
		for(let i = 0; i < 3; i++){
			for(let j = 0; j < 3; j++){
				if(table[startRow + i][startCol + j] === num){
					return false
				}

			}

		}

	return true
}


// console.log(solve(read1))
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
