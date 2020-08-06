import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuthContext = () => {
  const { state, dispatch, authService } = useContext(AuthContext);

  const login = async (username: string, password: string) => {
    dispatch({ type: "LOGIN_INIT" });
    let encodedUsername = encodeURIComponent(username);
    let encodedPassword = encodeURIComponent(password);
    await authService
      .login(encodedUsername, encodedPassword)
      .then(function (response) {
        dispatch({
          type: "LOGIN_COMPLETE",
          username: encodedUsername,
          password: encodedPassword,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken
        });
        alert('LOG IN SUCCESSFUL: ' + response.accessToken)
      }).catch((error) => {
        console.log(error);
        dispatch({ type: "LOGIN_ERROR" });
      });
  };

  const setUsername = async (username: string) => {
    dispatch({ type: "SET_USERNAME", username: username });
  };

  const setPassword = async (password: string) => {
    dispatch({ type: "SET_PASSWORD", password: password });
  };

  return {
    state,
    login,
    setUsername,
    setPassword
  };
};

export default useAuthContext;
