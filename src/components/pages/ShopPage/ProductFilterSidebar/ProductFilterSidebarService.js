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
