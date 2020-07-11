export default interface ILoginResponse {
    accessToken: string
    refreshToken: string
    expiresIn: number
    tokenType: string
    scope: string
}