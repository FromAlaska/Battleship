import { expect } from 'chai';

import {
  HOME_BOARD_DRAW,
} from 'src/features/home/redux/constants';

import {
  boardDraw,
  reducer,
} from 'src/features/home/redux/boardDraw';

describe('home/redux/boardDraw', () => {
  it('returns correct action by boardDraw', () => {
    expect(boardDraw()).to.have.property('type', HOME_BOARD_DRAW);
  });

  it('handles action type HOME_BOARD_DRAW correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_BOARD_DRAW }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
