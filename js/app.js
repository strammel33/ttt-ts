"use strict";
// Constants
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// Variables
let board;
let turn;
let winner;
let tie;
// Cached element references
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const boardEl = document.querySelector('.board');
const resetBtn = document.querySelector('button');
// Event Listeners
// Functions
init();
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
    startMessage();
}
function render() {
    updateBoard();
    updateMessage();
}
function startMessage() {
    if (messageEl?.textContent) {
        messageEl.textContent = 'X is up first';
    }
}
function updateBoard() {
}
function updateMessage() {
}
