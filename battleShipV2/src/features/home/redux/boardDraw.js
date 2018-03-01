// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_BOARD_DRAW,
} from './constants';

var boardSize = 5;

$(function() { //on load
    printBoard(boardSize);
});

function printBoard(i_BoardSize) {
    var maxRow = parseInt(i_BoardSize);
    var maxCol = parseInt(i_BoardSize);
    var num = 1;

    $("#board").append("<table oncontextmenu=\"return false\">");
    for(var row = maxRow - 1; row >= 0 ; row--) { 
           $("#board").append("<tr>");
            for(var col = 0; col < maxCol ; col++) {
                $("#board").append("<td>" + num + "</td>");
                num++;
            }

            $("#board").append("</tr>");
       }
        $("#board").append("</table>");
}

export function boardDraw() {
  return {
    type: HOME_BOARD_DRAW,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_BOARD_DRAW:
      return {
        ...state,
      };

    default:
      return state;
  }
}
