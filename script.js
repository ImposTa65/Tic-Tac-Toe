const board = document.getElementById('tic-tac-toe-board');
let currentPlayer = 'X';
const cells = [];

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => makeMove(cell, i));
    board.appendChild(cell);
    cells.push(cell);
}

function makeMove(cell, index) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            alert(`${cells[a].textContent} wins!`);
            resetBoard();
            break;
        }
    }
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = '');
}