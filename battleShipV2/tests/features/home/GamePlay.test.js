import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GamePlay } from 'src/features/home/GamePlay';

describe('home/GamePlay', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <GamePlay {...props} />
    );

    expect(
      renderedComponent.find('.home-game-play').getElement()
    ).to.exist;
  });
});
