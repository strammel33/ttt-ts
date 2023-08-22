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

boardEl?.addEventListener('click', handleClick)

resetBtn?.addEventListener('click', init)

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
  board.forEach((square, i) => {
    if (square === 0) {
      squareEls[i].textContent = ''
    } if (square === -1) {
      squareEls[i].textContent = 'O'
    } if (square === 1) {
      squareEls[i].textContent = 'X'
    }
  })
}

function updateMessage(): void {
  let name: string
  turn === 1 ? name = 'X' : name = 'O'

  if (messageEl) {
    if (!winner && !tie) {
      messageEl.textContent = `It's ${name}'s turn`
    }
    if (!winner && tie) {
      messageEl.textContent = `It's a tie!`
    }
    if (winner){
      messageEl.innerText = `Congrats, ${name}, you won!`
    }
  }
}

function handleClick(evt: MouseEvent) {
  if (!(evt.target instanceof HTMLElement)){
    return
  }

  let sqIdx = parseInt(evt.target.id.charAt(2))

  if (board[sqIdx] !== 0 || winner === true) {
    return
  }

  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placePiece(sqIdx: number) {
  board[sqIdx] = turn
}

function checkForTie() {
  board.includes(0) ? tie = false : tie = true
}

function checkForWinner() {
  winningCombos.forEach((array) => {
    if(Math.abs(board[array[0]] + board[array[1]] + board[array[2]]) === 3) {
      winner = true
    }
  })
}

function switchPlayerTurn() {
  if (winner) {
    return
  }
  turn = turn * -1
}