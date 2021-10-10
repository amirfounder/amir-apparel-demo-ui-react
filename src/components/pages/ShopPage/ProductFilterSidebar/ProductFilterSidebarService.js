import constants from "../../../../utils/constants";

const {
  FILTERABLE_PRODUCT_ATTRIBUTES: attributes
} = constants

export const buildFilterOptionsSearchQueryObj = (filterOptions) => {
  const searchQueryObj = {};
  Object.entries(filterOptions).forEach(([attribute, options]) => {
    const selectedEntriesArray = Object.entries(options).filter(([_, value]) => value);
    if (selectedEntriesArray.length > 0) {
      searchQueryObj[attribute] = selectedEntriesArray.map((entry) => entry[0]).join(',')
    }
  })
  return searchQueryObj;
}

export const buildShowFiltersInitialState = () => Object.fromEntries(attributes.map((attribute) => [attribute, false]))

export const showFiltersReducer = (state, action) => {
  switch (action.type) {
    case 'toggleShow':
      const showFiltersInitialState = buildShowFiltersInitialState();
      if (Object.keys(showFiltersInitialState).includes(action.value)) {
        return { ...state, [action.value]: !state[action.value]}
      }
      break;
    default: {}
  }
}

export const buildShowFilterTogglerFnUsingDispatcher = (dispatcher) => {
  return (attribute) => {
    return () => {
      dispatcher({
        type: 'toggleShow',
        value: attribute
      })
    }
  }
}
