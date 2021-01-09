"use strict"; // Using modern style

import {div} from "/js/common.js";
import * as logic from "/js/sudokuLogic.js";

const numbersDiv =
    `<div>
        <div class="divMiniLine">
            <div class ="divMiniCell">1</div>
            <div class ="divMiniCell">2</div>
            <div class ="divMiniCell">3</div>
        </div>
        <div class="divMiniLine">
            <div class ="divMiniCell">4</div>
            <div class ="divMiniCell">5</div>
            <div class ="divMiniCell">6</div>
        </div>
        <div class="divMiniLine">
            <div class ="divMiniCell">7</div>
            <div class ="divMiniCell">8</div>
            <div class ="divMiniCell">9</div>
        </div>
    </div>`;

let tempVal = 0;
let gtto = false;

export function printSudoku(sudoku) {
    const header = document.querySelector('.Header');
    for (let x = 0; x < 9; x++) {
        header.innerHTML += '<div class="divLine"></div>';
    }
    const divLines = header.querySelectorAll('.divLine');
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            const cube = (div(x,3) * 3) + div(y,3);
            divLines[x].innerHTML += 
            `<div 
            class="divCell" 
            data-hor='${x}' 
            data-vert='${y}' 
            data-cube='${cube}'">
            ${sudoku[x][y]}
            </div>`;
        }
    }

    const divCells = header.querySelectorAll('.divCell');

    divCells.forEach((item) => {
        item.setAttribute('data-constant', 'true');
        item.addEventListener('mouseenter', () => mouseEnterHandler(item));
        item.addEventListener('mouseleave', () => mouseLeaveHandler(item));
    });
}

function mouseEnterHandler(cell) {
    if (cell.dataset.constant == 'true' || gtto) {
        return;
    }
    tempVal = cell.textContent;

    cell.innerHTML = numbersDiv;

    const divMiniCells = cell.querySelectorAll('.divMiniCell');
    divMiniCells.forEach((btn) => {
        btn.addEventListener('click', () => {
            tempVal = btn.textContent;
            cell.textContent = tempVal;
            gtto = true;
        });
    });
}

function mouseLeaveHandler(cell) {
    if (cell.dataset.constant == 'true') {
        return;
    }

    cell.textContent = tempVal;

    if (cell.textContent == '') {
        return;
    }

    if (!logic.isDuplicateExist(cell)) {
        cell.dataset.constant = 'true';
    }

    console.log(logic.isDuplicateExist(cell));
    console.log(logic.numOfDuplicates(cell));
    gtto = false;

    if (logic.finalDesition()) {
        alert('!!!!Congratulations, you won!!!!!');
    }
}