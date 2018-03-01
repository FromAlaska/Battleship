import initialState from './initialState';
import { reducer as boardDrawReducer } from './boardDraw';
import { reducer as drawBoardReducer } from './drawBoard';

const reducers = [
  boardDrawReducer,
  drawBoardReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
