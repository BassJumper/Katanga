import IAuthState from "../interfaces/IAuthState"
import IAuthAction from "../interfaces/IAuthAction"

export const authReducer = (state: IAuthState, action: IAuthAction) => {
  switch (action.type) {
    case "LOGIN_INIT":
      return {
        ...state,
        isError: false,
        isAuthenticating: true,
      };
    case "LOGIN_COMPLETE":
      return {
        ...state,
        isAuthenticating: false,
        accessToken: action.accessToken
      };
    case "LOGIN_ERROR":
        return {
          ...state,
          isAuthenticating: false,
          isError: true
        };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.username,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
