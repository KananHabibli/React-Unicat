import React, { useEffect, useState, useReducer } from "react";
import app from "../firebase";
import Loading from '../components/Main/Loading'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [pending, setPending] = useState(true);

  const initialState = {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')),
    currentUser: JSON.parse(localStorage.getItem('currentUser'))
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("currentUser", JSON.stringify(action.payload.user));
        localStorage.setItem("isAuthenticated", true);
        return {
          ...state,
          isAuthenticated: true,
          currentUser: action.payload.user,
        };
      case "LOGOUT":
          localStorage.setItem("currentUser", null);
          localStorage.setItem("isAuthenticated", false);
          return {
            ...state,
            isAuthenticated: false,
            currentUser: null,
          };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setPending(false)
    });
  }, []);

  if(pending){
    return <Loading />
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};