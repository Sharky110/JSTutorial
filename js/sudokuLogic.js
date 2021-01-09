"use strict"; // Using modern style

import {getRandomInt} from "/js/common.js";

export function removeNums(numsToRemove) {
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

export function isDuplicateExist(currElement){
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

export function numOfDuplicates(currElement){
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

export function finalDesition(){
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
