import { cartReducer } from "./CartContextService";


describe('type = add', () => {

  test('new unique product', () => {
    const quantityMock = 10;
    const productMock = {id: 4, quantity: 3};
    const cartStateMock = [
      {id: 1, quantity: 10},
      {id: 2, quantity: 10},
      {id: 3, quantity: 10}
    ]
  
    const action = {
      quantity: quantityMock,
      product: productMock,
      type: 'add'
    }

    const
      actual = cartReducer(cartStateMock, action),
      expected = [
        ...cartStateMock,
        productMock
      ]
    
    expect(actual).toEqual(expected);
  })

})