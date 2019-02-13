// Grab restart button
var restart = document.querySelector('#button');

// Grab all squares
var squares = document.querySelectorAll('td');

// Clear all squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = " ";
    }
}

restart.addEventListener('click', clearBoard);
// Check the square marker
function placeX() {
    this.textContent = 'X';
}

function placeO() {
    this.textContent = 'O';
}



// for loop to add event listerners to all squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', placeX);
    squares[i].addEventListener('dblclick', placeO);
}

if (squares[0].textContent === 'X' && squares[1].textContent === 'X' && squares[2].textContent === 'X') {
    console.log("gameover");
}