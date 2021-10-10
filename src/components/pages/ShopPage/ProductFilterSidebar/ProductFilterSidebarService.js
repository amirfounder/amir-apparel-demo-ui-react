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

export const showFiltersReducer = (state, action) => {
  switch (action.type) {
    case 'toggleShow':
      if (Object.keys(showFiltersInitialState).includes(action.value)) {
        return { ...state, [action.value]: !state[action.value]}
      }
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
