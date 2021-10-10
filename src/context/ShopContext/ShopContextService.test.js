import { filterOptionsReducer } from "./ShopContextService";

describe('Filter Options Reducer', () => {
  const state = {
    demographic: {
      men: null,
      women: null,
    },
    material: {
      silk: null,
      cotton: null
    }
  }

  describe('action type: init', () => {
    test('action type: init. attribute: valid', () => {
      const
        action = {
          type: 'init',
          attribute: 'demographic',
          value: {
            men: true,
            women: true
          }
        },
        expectedState = {
          ...state,
          'demographic' : {
            men: true,
            women: true
          }
        },
        actualState = filterOptionsReducer(state, action);
  
      expect(actualState).toEqual(expectedState)
    })
  
    test('action type: init. attribute: invalid', () => {
      const
        action = {
          type: 'init',
          attribute: 'blue',
          value: {
            men: true,
            women: true
          }
        },
        expectedState = { ...state },
        actualState = filterOptionsReducer(state, action)
  
      expect(actualState).toEqual(expectedState)
    })
  })

  describe('action type: update', () => {
    test('action type: update, attribute: demographic, key: men, value: true', () => {
      const
        action = {
          type: 'update',
          attribute: 'demographic',
          key: 'men',
          value: true
        },
        expectedState = {
          ...state,
          demographic: {
            ...state.demographic,
            men: true
          }
        },
        actualState = filterOptionsReducer(state, action);
      
      expect(actualState).toEqual(expectedState)
    })
  
    test('action type: update, attribute: demographic, key: foo, value: true', () => {
      const
        action = {
          type: 'update',
          attribute: 'demographic',
          key: 'foo',
          value: true
        },
        expectedState = { ...state },
        actualState = filterOptionsReducer(state, action);
      
      expect(actualState).toEqual(expectedState)
    })
    
    test('action type: update, attribute: invalid', () => {
      const
        action = {type: 'update', attribute: 'foo'},
        expectedState = { ...state },
        actualState = filterOptionsReducer(state, action);
      
      expect(actualState).toEqual(expectedState);
    })
  
    test('action type: null', () => {
      const
        action = { type: null },
        expectedState = { ...state },
        actualState = filterOptionsReducer(state, action);
      
      expect(actualState).toEqual(expectedState);
    })
  })

})
