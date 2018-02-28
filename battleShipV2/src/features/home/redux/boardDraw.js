// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_BOARD_DRAW,
} from './constants';

export function boardDraw() {
  return {
    type: HOME_BOARD_DRAW,
  };
}

var thing = "d";
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
