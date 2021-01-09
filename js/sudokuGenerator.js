"use strict"; // Using modern style

import * as common from "/js/common.js";

function initArray(sudoku) {
    for (var i = 0; i < 9; i++) {
        sudoku[i] = [];
        for (var j = 0; j < 9; j++) {
            sudoku[i][j] = 0;
        }
    }
}

export function generateSudoku(sudoku) {
    initArray(sudoku);

    let counter = 0;

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            let random = common.getRandomInt(9) + 1;
            if (isInRow(sudoku, x, random) ||
                isInCol(sudoku, y, random) ||
                isInCube(sudoku, x, y, random)) {
                counter += 1;
                y -= 1;
                if (counter > 40) {
                    x = -1;
                    counter = 0;
                    initArray(sudoku);
                    break;
                }
            } else {
                sudoku[x][y] = random;
                counter = 0;
            }
        }
    }
}

function isInRow(sudoku, x, value) {
    for (let y = 0; y < 9; y++) {
        if (sudoku[x][y] == value) {
            return true;
        }
    }
    return false;
}

function isInCol(sudoku, y, value) {
    for (let x = 0; x < 9; x++) {
        if (sudoku[x][y] == value) {
            return true;
        }
    }
    return false;
}

function isInCube(sudoku, x, y, value) {
    const startX = common.div(x, 3) * 3;
    const startY = common.div(y, 3) * 3;
    const endX = startX + 3;
    const endY = startY + 3;
    for (let a = startX; a < endX; a++) {
        for (let b = startY; b < endY; b++) {
            if (sudoku[a][b] == value) {
                return true;
            }
        }
    }
    return false;
}