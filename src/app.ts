// Constants

const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Variables

let board: Array<number>
let turn: number
let winner: boolean
let tie: boolean

// Cached element references

const squareEls = document.querySelectorAll<HTMLElement>('.sqr')
const messageEl = document.querySelector<HTMLHeadingElement>('#message')
const boardEl = document.querySelector<HTMLElement>('.board')
const resetBtn = document.querySelector<HTMLButtonElement>('button')

// Event Listeners


// Functions
init()

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  winner = false
  tie = false
  render()
  startMessage()
}

function render(): void {
  updateBoard()
  updateMessage()
}

function startMessage(): void {
  if (messageEl?.textContent) {
    messageEl.textContent = 'X is up first'
  } 
}

function updateBoard(): void {

}

function updateMessage(): void {

}