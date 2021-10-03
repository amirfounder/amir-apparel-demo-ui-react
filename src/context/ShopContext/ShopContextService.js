import constants from '../../utils/constants'

const {
  FILTERABLE_PRODUCT_ATTRIBUTES: attributes
} = constants;

export const filterOptionsReducer = (state, action) => {
  switch (action.type) {
    case 'init':
      if (attributes.includes(action.attribute)) {
        return {
          ...state,
          [action.attribute.toLowerCase()]: action.value
        }
      }
      break;
    case 'update':
      if (Object.keys(state).includes(action.attribute)) {
        if (action.key in state[action.attribute]) {
          return {
            ...state,
            [action.attribute]: {
              ...state[action.attribute],
              [action.key]: action.value
            }
          }
        }
      }
      break;
    default: {}
  }

  return state
}