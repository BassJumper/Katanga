import React, { createContext, useReducer, useState, useEffect } from "react"
import AuthService from "../services/authService"
import IAuthState from "../interfaces/IAuthState"
import IAuthService from "../interfaces/IAuthService"
import { authReducer } from "../reducers/authReducer"

interface IContextProps { state: IAuthState; dispatch: React.Dispatch<{}>, authService: IAuthService }

const initialState : IAuthState = {
  username: "",
  password: "",
  isAuthenticating: false,
  isError: false,
  accessToken: "",
  refreshToken: ""
}

const authService = new AuthService();
const AuthContext = createContext({state: initialState, dispatch: () => {}, authService: authService} as IContextProps);

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

export { AuthContext, AuthProvider }
