"use strict";

export function div(val, by) {
    return (val - val % by) / by;
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}