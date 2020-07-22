"use strict"; // Using modern style

var n = 9,
    m = 9;
let sudoku = [];
let counter = 0;

function initArray() {
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
    printCube();
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

function div(val, by) {
    return (val - val % by) / by;
}

function isInCube(x, y, value) {
    const startX = div(x, 3) * 3;
    const startY = div(y, 3) * 3;
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

function printCube() {
    let str;
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            str += sudoku[x][y];
        }
        console.log(str);
        str = '';
    }
}

const visibleNums = 10;

printHTML();
RemoveNums(visibleNums);



function printHTML() {
    const header = document.querySelector('.Header');
    for (let x = 0; x < 9; x++) {
        header.innerHTML += '<div class="divLine"></div>';
    }
    const divnie = header.querySelectorAll('.divLine');
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            divnie[x].innerHTML += `<div class="divCell" data-hor='${x}' data-vert='${y}' data-cube='${(div(x,3) * 3) + div(y,3)}'">${sudoku[x][y]}</div>`;
        }
    }

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


    const divCells = header.querySelectorAll('.divCell');

    divCells.forEach((item) => {

        item.setAttribute('data-constant', 'true');

        item.addEventListener('mouseenter', () => {
            if (item.dataset.constant == 'true') {
                return;
            }
            console.log("In");
            if (gtto) {
                return;
            }
            tempVal = item.textContent;

            item.innerHTML = numbersDiv;

            const divMiniCells = item.querySelectorAll('.divMiniCell');
            divMiniCells.forEach((btn) => {
                btn.addEventListener('click', () => {
                    tempVal = btn.textContent;
                    item.textContent = tempVal;
                    gtto = true;
                });
            });
        });
        item.addEventListener('mouseleave', () => {
            if (item.dataset.constant == 'true') {
                return;
            }
            console.log("Out");
            
            item.textContent = tempVal;

            if(item.textContent == ''){
                return;
            }

            if(!isDuplicateExist(item)){
                item.dataset.constant = 'true';
            }

            console.log(isDuplicateExist(item));
            console.log(numOfDuplicates(item));
            gtto = false;

            if(finalDesition()){
                alert('!!!!Congratulations, you won!!!!!');
            }
        });
    });
}

function RemoveNums(numsToRemove) {
    const divCells = document.querySelectorAll('.divCell');
    for (let i = 0; i < numsToRemove; i++) {
        var randNum = getRandomInt(81);
        if (divCells[randNum].textContent == '') {
            i -= 1;
        } else {
            divCells[randNum].textContent = '';
            divCells[randNum].setAttribute('data-constant', 'false');
        }
    }
}

function isDuplicateExist(currElement){
    const divCells = document.querySelectorAll('.divCell');
    let result = false;
    for(let x=0; x< divCells.length;x++){
        const element = divCells[x];
        if(element.textContent == ''){
            continue;
        }

        if(element.dataset.hor == currElement.dataset.hor &&
        element.dataset.vert == currElement.dataset.vert &&
        element.dataset.cube == currElement.dataset.cube){
        continue;
        }
        
        if(element.textContent == currElement.textContent){
            if(element.dataset.hor == currElement.dataset.hor){
                result = true;
                break;
            }
            else if(element.dataset.vert == currElement.dataset.vert){
                result = true;
                break;
            }
            else if(element.dataset.cube == currElement.dataset.cube){
                result = true;
                break;
            }
        }
    }
    return result;
}

function numOfDuplicates(currElement){
    const divCells = document.querySelectorAll('.divCell');
    let result = 0;
    for(let x=0; x< divCells.length;x++){
        const element = divCells[x];
        if(element.textContent == currElement.textContent){
            if(element.dataset.hor == currElement.dataset.hor){
                result += 1;
            }
            else if(element.dataset.vert == currElement.dataset.vert){
                result += 1;
            }
            else if(element.dataset.cube == currElement.dataset.cube){
                result += 1;
            }
        }
    }
    return result;
}

function finalDesition(){
    const divCells = document.querySelectorAll('.divCell');
    let result = true;
    for(let x=0; x< divCells.length;x++){
        const element = divCells[x];
        if(element.dataset.constant == 'false'){
            result = false;
            break;
        }
    }
    return result;
}
