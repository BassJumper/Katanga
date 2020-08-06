import React, { createContext, useReducer, useState, useEffect } from "react";
import AuthService from "../services/authService";
import { authReducer } from "../reducers/authReducer";
import IAuthState from "../interfaces/IAuthState"
import IAuthService from "../interfaces/IAuthService";

interface IContextProps {
  state: IAuthState;
  dispatch: React.Dispatch<any>;
  authService: IAuthService;
}

const initialState : IAuthState = {
  username: "",
  password: "",
  accessToken: "",
  isAuthenticating: false,
  isError: false,
};

const authService = new AuthService();

const AuthContext = createContext({
  state: initialState,
  dispatch: () => {},
  authService: authService,
} as IContextProps);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const [contextValue, setContextValue] = useState({
    state,
    dispatch,
    authService,
  });

  useEffect(() => {
    setContextValue(() => ({
      ...contextValue,
      state,
    }));
  }, [state]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
