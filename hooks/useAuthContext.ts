import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"

const useAuthContext = () => {
  const { state, dispatch, authService } = useContext(AuthContext)

  const login = async (username: string, password: string) => {
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);
    await authService
      .login(encodedUsername, encodedPassword)
      .then(function (response) {
        console.log("accessToken", response.accessToken);
        console.log("refreshToken", response.refreshToken);

        dispatch({
          type: "LOGIN_COMPLETE",
          username: encodedUsername,
          password: encodedPassword,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          payload: {}
        });
      });
  }

  const setUsername = async (username) => {
    dispatch({ type: "SET_USERNAME", username: username })
  }

  const setPassword = async (password) => {
    dispatch({ type: "SET_PASSWORD", password: password })
  }

  return {
    state,
    login,
    setUsername,
    setPassword
  }
}

export default useAuthContext
