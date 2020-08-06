export default interface IAuthState {
    username: string,
    password: string,
    isAuthenticating: boolean,
    isError: boolean,
    accessToken: string,
}