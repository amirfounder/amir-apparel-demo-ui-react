export const reduceUser = (state, action) => {
  switch (action.type) {
    case 'login': 
      return {
        isLoggedIn: true,
        user: action.value
      }
    case 'logout':
      return {
        isLoggedIn: false,
        user: null
      }
    default:
      return state
  }
}