import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockOrder;

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockOrder = {
      id: 1,
      name: 'iPhone',
      description: 'It\'s the new iPhone 18',
      price: 800,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154'
    }
  })

  it('should keep an up-to-date snapshot of App', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should add an order when addPurchase is fired', () => {
    let expected = [mockOrder];
    let e = {
      preventDefault: jest.fn()
    }
    expect(wrapper.state('orders')).toEqual([]);
    wrapper.instance().addPurchase(e, mockOrder);
    expect(wrapper.state('orders')).toEqual(expected);
  })

  it('should delete an order when deletePurchase is fired', () => {
    wrapper.setState({ orders: [mockOrder] })
    let expected = [];
    // let deleteOrder(1) = jest.fn();
    expect(wrapper.state('orders')).toEqual([mockOrder]);
    wrapper.instance().deletePurchase(1);
    expect(wrapper.state('orders')).toEqual([]);
  })
})
