import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Play } from 'src/features/home';

describe('home/Play', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Play />
    );

    expect(
      renderedComponent.find('.home-play').getElement()
    ).to.exist;
  });
});
