import {generateSudoku} from "/js/sudokuGenerator.js";
import {printSudoku} from "/js/sudokuRenderer.js";
import {removeNums} from "/js/sudokuLogic.js";

let sudoku = [];
const visibleNums = 10;

generateSudoku(sudoku);
printSudoku(sudoku);
removeNums(visibleNums);


