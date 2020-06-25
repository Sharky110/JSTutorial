"use strict"; // Using modern style

var n = 9,
    m = 9;
let sudoku = [];
let counter = 0;

function initArray(){
    for (var i = 0; i < m; i++) {
        sudoku[i] = [];
        for (var j = 0; j < n; j++) {
            sudoku[i][j] = 0;
        }
    }
}

generate();


function generate() {
    initArray();
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            printCube();
            let random = getRandomInt(9) + 1;
            if (isInRow(x, random) || isInCol(y, random) || isInCube(x, y, random)) {
                counter += 1;
                y -= 1;
                if (counter > 40) {
                    x = -1;
                    counter = 0;
                    initArray();
                    break;
                }
            } else {
                sudoku[x][y] = random;
                counter = 0;
            }
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function isInRow(x, value) {
    for (let y = 0; y < 9; y++) {
        if (sudoku[x][y] == value) {
            return true;
        }
    }
    return false;
}

function isInCol(y, value) {
    for (let x = 0; x < 9; x++) {
        if (sudoku[x][y] == value) {
            return true;
        }
    }
    return false;
}

function isInCube(x, y, value) {
    const startX = x / 3 * 3;
    const startY = y / 3 * 3;
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

function printCube(){
    let str;
    for(let x = 0; x<9;x++){
        for(let y = 0; y<9; y++){
     //       console.log(x);
      //      console.log(y);
     //       console.log(`val: ${sudoku[x][y]}`);
            str += sudoku[x][y];
        }
        console.log(str);
        str ='';
    }
}
