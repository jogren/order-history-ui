import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper;
  let mockOrder;

  beforeEach(() => {
    mockOrder = {
      id: 1,
      name: 'iPhone',
      description: 'It\'s the new iPhone 18',
      price: 800,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154'
    }

    wrapper = shallow(<Container orders={[mockOrder]} deletePurchase={jest.fn()} />)
  })

  it('should keep an up-to-date snapshot of Container', () => {
    expect(wrapper).toMatchSnapshot();
  })
})