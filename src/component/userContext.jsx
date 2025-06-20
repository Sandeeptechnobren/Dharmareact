import React, { createContext, useReducer } from 'react';

// Create the context
export const UserContext = createContext();

// Define the initial state of the user
const initialState = {
  isLogin: false,
  user: null,
  welcomeMessage: '',
};

// Create a reducer function to handle state changes
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogin: true, user: {
          name: action.payload.name,  
          email: action.payload.email,
          phone: action.payload.phone,
        }, welcomeMessage: `Welcome, ${action.payload.name}` };
    case 'LOGOUT':
      return { ...state, isLogin: false, user: null, welcomeMessage: '' };
    default:
      return state;
  }
};

// Create the provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
