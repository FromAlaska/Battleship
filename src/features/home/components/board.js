// Make ships for battleship
var len;	// Length of the ship
var pos;	// Position of the ship
			// Will ships need more logic?

// The ships
var acCarrier = {len: 5, pos: []};
var battleship = {len: 4, pos: []};
var submarine = {len: 3, pos: []};
var destroyer = {len: 3, pos: []};
var patrolBoat = {len: 2, pos: []};

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

// Place a ship on the board
function placeShip(ship, column, row, orient) {
	// Get ship head and set the ships points to the
	// corresponding points
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
		// An error hath occurred!
	}
	return status;
}