// Make ships for battleship
var name;	// Name of the ship
var len;	// Length of the ship
var pos;	// Position of the ship
			// Will ships need more logic?

// The ships
var acCarrier = {name: "Aircraft Carrier", len: 5, pos: []};
var battleship = {name: "Battleship", len: 4, pos: []};
var submarine = {name: "Submarine", len: 3, pos: []};
var destroyer = {name: "Destroyer", len: 3, pos: []};
var patrolBoat = {name: "Patrol Boat", len: 2, pos: []};

// Grid rows and columns and the size for each square.
var rows = 10;
var cols = 10;
var squareSize = 50;

// Holds the div container for the gameboard to draw onto screen.
var boardContainer = document.getElementById("board");



// The one who owns the ships
var ply = [acCarrier, battleship, submarine, destroyer, patrolBoat]; // Can we use only one?

// Make a new battleship board
var colA = new Array(10);
var colB = new Array(10);
var colC = new Array(10);
var colD = new Array(10);
var colE = new Array(10);
var colF = new Array(10);
var colG = new Array(10);
var colH = new Array(10);
var colI = new Array(10);
var colJ = new Array(10);
var bsBoard = [colA, colB, colC, colD, colE, colF, colG, colH, colI, colJ];

function boardDraw() {
  
}

// Place a ship on the board
function placeShip(ship, column, row, orient) {
	// Check to see if there is a conflict
	
	// If not, get ship head and set the ships 
	// points to the corresponding points
	if (orient == "horizontal") {
		for (i = 0; i < ship.len; i++) {
			// Mark spot as taken
			bsBoard[column][row] = 1;
			// Store as ship's position
			ship.pos.push('' + column + row++);
		}
	} else if (orient == "vertical") {
		for (i = 0; i < ship.len; i++) {
			// Mark spot as taken
			bsBoard[column][row] = 1;
			// Store as ship's position
			ship.pos.push('' + column++ + row);
		}
	} else {
		// not a valid orientation
	}
}

// Get what kind of ship has been placed at a certain position
function getShip(column, row) {
	// Ship positions should be stored as a string of two ints
	// Find ship pos that matches passed coord. and return
	// that ship.
	var shipPos = ''+column+row
	for (i = 0; i < ply.length; i++) {
		for (j = 0; j < ply.length; j++) {
			if (shipPos == ply[i].pos[j]) {
				return ply[i];
			}
		}
	}
}

// Status of a position
function atPos(column, row) {
	var status;
	if (bsBoard[column][row] === 0) {
		status = "miss";
	} else if (bsBoard[column][row] == 1) {
		status = "found";
	} else if (bsBoard[column][row] == 2) {
		status = "hit";
	} else if (bsBoard[column][row] == 3) {
		status = "sank";
	} else {
		console.log("An error hath!");
	}
	return status;
}

// Checking to see if a ship has been sunk
function isSunk(ship) {
	// Return whether or not a ship has been sunk
	for (i = 0; i < ship.pos.length; i++) {
		if (ship.pos[i] != 2) {
			return false;
		}
	}
	return true;
}

// Fire the main guns!
function fire(column, row) {
	if (atPos(column, row) == "miss") {
		// Shot missed
		return "You missed!";
	} else if (atPos(column, row) == "found") {
		// Shot hit
		bsBoard[column][row] = 2;
		// Check to see if this sinks the ship
		if (isSunk(getShip(column, row))) {
			return "You sunk the ship!";
		} else {
			// If not we only hurt it
			return "Hit success!";
		}
	} else {
		// This position has already been shot at
		// Return error and attempt to re-fire
	}
}