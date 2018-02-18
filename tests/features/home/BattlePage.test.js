import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BattlePage } from 'src/features/home/BattlePage';

describe('home/BattlePage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BattlePage {...pageProps} />
    );

    expect(
      renderedComponent.find('.home-battle-page').getElement()
    ).to.exist;
  });
});
