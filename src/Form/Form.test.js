import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  let mockPurchase;

  beforeEach(() => {
    mockPurchase = jest.fn();
    wrapper = shallow(<Form addPurchase={mockPurchase}/>)
  })

  it('should keep an up-to-date snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update img state when entering into the imageUrl input', () => {
    wrapper.find('input').at(0).simulate('change', {target: { name: 'img', value: './image' }});
    expect(wrapper.state('img')).toEqual('./image')
  })

  it('should update name state when entering into the name input', () => {
    wrapper.find('input').at(1).simulate('change', { target: { name: 'name', value: 'iPhone' } });
    expect(wrapper.state('name')).toEqual('iPhone')
  })

  it('should update description state when entering into the description input', () => {
    wrapper.find('input').at(2).simulate('change', { target: { name: 'description', value: 'The new iPhone18' } });
    expect(wrapper.state('description')).toEqual('The new iPhone18')
  })

  it('should update price state when entering into the price input', () => {
    wrapper.find('input').at(3).simulate('change', { target: { name: 'price', value: '200' } });
    expect(wrapper.state('price')).toEqual('200')
  })

  it('should fire addPurchase method when the button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockPurchase).toHaveBeenCalled();
  })
})