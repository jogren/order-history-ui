import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

describe('Order', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
    <Order 
      id={1} 
      name="iPhone" 
      description="The new iPhone18" 
      img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154"
      price={200}
      deletePurchase={jest.fn()}
    />)
  })

  it('should keep an up-to-date snapshot of Order', () => {
    expect(wrapper).toMatchSnapshot();
  })
})