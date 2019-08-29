import { getOrders } from './apiCalls';

describe('getOrders', () => {
  let mockOrder;
  beforeEach(() => {
    mockOrder = {
      id: 1,
      name: 'iPhone',
      description: 'It\'s the new iPhone 18',
      price: 800,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154'
    }
  });

  it('should get orders from the Order History API', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockOrder)
      });
    });
    expect(getOrders()).resolves.toEqual(mockOrder)
  });

  it('should throw an error if the response is not ok (SAD)', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getOrders()).rejects.toEqual(Error('Error fetching your orders'));
  });

  it('should return catch error if promise rejects (SAD)', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down'
      })
    });
    expect(getOrders()).rejects.toEqual(Error('Server is down'));
  });
});
