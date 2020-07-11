import ILoginResponse from "../interfaces/ILoginResponse"

export default interface IAuthService {
    login(username: string, password: string) : Promise<ILoginResponse>
}