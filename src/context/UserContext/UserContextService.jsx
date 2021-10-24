export const reduceUser = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.value;
    default:
      return state
  }
}