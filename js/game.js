// Get Name Player And X or O Value
const PlayerOne = localStorage.getItem("player-one");
const PlayerTwo = localStorage.getItem("player-two");
const xOrO = localStorage.getItem("x-or-o");


// Globala
const player_1 = document.getElementById("player1");
const player_2 = document.getElementById("player2");
const startFrm = document.getElementById("start-from");
const playerNameOne = document.querySelector(".name-one")
const playerNameTWo = document.querySelector(".name-two")



/// Popup Message Player
const popupMessage = document.querySelector(".popup-wins-or-lose");
const messagePlayer = document.getElementById("message-player");
const colseMessage = document.getElementById("close");




player_1.textContent = `${xOrO}:`;
playerNameOne.textContent = PlayerOne;


if (xOrO === "O") {
    player_2.textContent = "X:"; 
} else {
    player_2.textContent = "O:"; 
}
playerNameTWo.textContent = PlayerTwo;


startFrm.textContent = `${xOrO}`;


let currentValue = xOrO; // Current value (X or O)



// Function To Add Value in Box
const boxes = document.querySelectorAll(".content-game .boxes .box");
let board = Array(9).fill(null); // Empty array to store the values of the boxes

function addValue(event) {
    let box = event.target;
    let boxIndex = Array.from(boxes).indexOf(box); // Get the index of the box

    // Check if the box is empty before making changes
    if (!board[boxIndex]) {
        board[boxIndex] = currentValue; // Update the game board with the current value
        box.textContent = currentValue; // Place the value in the box
        
        // Switch between X and O
        currentValue = (currentValue === "X") ? "O" : "X";

        // Add Class X Or O
        if (currentValue === "X"){
            box.classList.add("o");
            box.classList.remove("x");
        } else{
            box.classList.add("x")
            box.classList.remove("o")
        }
        // Check for a win after the update
        checkWin();
    }
}


function checkWin() {
    const winningCombinations = [
    // Rows
    [0, 1, 2], // Row One
    [3, 4, 5], // Row Two
    [6, 7, 8], // Row Three
    
    // Columns
    [0, 3, 6], // Column One
    [1, 4, 7], // Column Two
    [2, 5, 8], // Column Three
    
    // Diagonals
    [0, 4, 8], // Diagonals One From Top Left To Bottom Right
    [2, 4, 6]  // Diagonals Two From Top Right To Bottom Left
    ];

    // Check each winning combination
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            popupMessage.classList.add("show");
            if (board[a] === "O") {
                if (xOrO === "O") {
                    messagePlayer.textContent = `Player ${PlayerOne} wins`;
                } else {
                    messagePlayer.textContent = `Player ${PlayerTwo} wins`;
                }
                currentValue = "O";
            } else if (board[a] === "X") {
                if (xOrO === "X") {
                    messagePlayer.textContent = `Player ${PlayerOne} wins`;
                } else {
                    messagePlayer.textContent = `Player ${PlayerTwo} wins`;
                }
                currentValue = "X";
            }
            
        // Close message and reset game
        colseMessage.onclick = () => {
            popupMessage.classList.remove("show");
            resetGame(); // Reset the game after a win
        };
            return;
        }
    }


    // Check for a tie
    if (!board.includes(null)) {
        popupMessage.classList.add("show");
        messagePlayer.textContent = `It is a tie`;
        colseMessage.onclick = () => {
            popupMessage.classList.remove("show");
            resetGame(); // Reset the game after a win
        };
    }
}


function resetGame() {
    board.fill(null); // Reset the game board
    boxes.forEach(box => box.textContent = ""); // Reset the boxes
}

boxes.forEach((box) => {
    box.addEventListener("click", addValue);
});


console.log(xOrO)

