let btns = document.querySelectorAll('.btn');
let resetBtn = document.querySelector('#reset');

// All possible winning combinations
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// true = X turn, false = O turn
let xTurn = true;
let gameOver = false;

// Handle button clicks
btns.forEach((btn) => {
    btn.addEventListener('click', () => {

        // Stop if game already ended
        if (gameOver) return;

        // Allow click only on empty button
        if (btn.textContent === '') {

            // Place X or O
            if (xTurn) {
                btn.textContent = 'X';
            } else {
                btn.textContent = 'O';
            }

            // Switch turn
            xTurn = !xTurn;

            // Check winner after every move
            checkWinner();
        }
    });
});

// Check winner function
function checkWinner() {

    for (let pattern of winningPatterns) {

        let pos1 = btns[pattern[0]].textContent;
        let pos2 = btns[pattern[1]].textContent;
        let pos3 = btns[pattern[2]].textContent;

        // Ignore empty cells
        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {

            // Same values = winner
            if (pos1 === pos2 && pos2 === pos3) {

                gameOver = true;
                alert(`Winner is ${pos1}`);

                // Disable all buttons
                btns.forEach((btn) => {
                    btn.disabled = true;
                });

                return;
            }
        }
    }

    // Check for draw
    let allFilled = true;

    btns.forEach((btn) => {
        if (btn.textContent === '') {
            allFilled = false;
        }
    });

    if (allFilled && !gameOver) {
        gameOver = true;
        alert('Match Draw!');
    }
}

// Reset game
resetBtn.addEventListener('click', () => {

    btns.forEach((btn) => {
        btn.textContent = '';
        btn.disabled = false;
    });

    xTurn = true;
    gameOver = false;
});


