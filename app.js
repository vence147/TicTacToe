const cells = document.querySelectorAll('.row > div');    // all 9 cells
let currentPlayer = 'X';    // the starting player is X


cells.forEach(cell => {
    cell.addEventListener('click', function(event) {    // adding click response
        if (event.target.textContent === '') {      //check for blank cells
            event.target.textContent = currentPlayer;       // 'X' or 'O' depending on current player
        }     
    
            // after each move, check for winner or draw
            let winner = checkWin();
            if (winner) {
                alert(winner + ' is the winner!');
                //resetGame();
                } else if (checkDraw()) {
                    alert('DRAW!');
                    resetGame();
                } else {
                    //  switch player
                    currentPlayer = currentPlayer === 'X' ? 'O':'X';
                }
            }
        )
    }); 


    
    
    /*
    if (checkWin() !== null) {
        console.log(checkWin + ' is the winner!');
    } else if (checkDraw()) {
        console.log('It is a draw.');
    } */
    


// check for result (win/draw)?
function checkWin () {
    const winCondition = [
        [0, 1, 2],  // row wins
        [3, 4, 5],
        [6, 7, 8],  
        [0, 3, 6],  // column wins
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],  // diagonal wins
        [2, 4, 6]
    ];

    for (let combination of winCondition) {
        const [a, b, c] = combination;
        if (cells[a].textContent && 
            cells[a].textContent === cells[b].textContent && 
            cells[a].textContent === cells[c].textContent) {
          return cells[a].textContent; // Returns 'X' or 'O'
        }
      }
      return null;
    }

function checkDraw () {
    return [...cells].every(cell=> cell.textContent !== '');

    }

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = ''; // Clear all cells
    });
    currentPlayer = 'X'; // Reset the starting player
}    
    

        


// HINTS!!
// if else statements are your friend!
// ===

//cells[0].textContent

//if(conditionOne && conditionTwo) {

//}