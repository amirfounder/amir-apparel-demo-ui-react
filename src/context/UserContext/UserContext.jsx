import React, { createContext, useContext, useReducer } from 'react';
import { reduceUser } from './UserContextService';

const UserContext = createContext();

export const UserProvider = (props) => {
  const {
    children
  } = props;

  const initalUser = {}
  const [state, dispatchUser] = useReducer(reduceUser, initalUser)

  const value = { state, dispatchUser }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Cannot call useUserContext outside of UserContext.Provider")
  }
  return context;
}