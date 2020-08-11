import ILoginResponse from "../interfaces/ILoginResponse"
import IAuthService from "../interfaces/IAuthService"
import axios from "axios"

export default class AuthService implements IAuthService {
  get apiUrl() {
    return "https://pure-energy-api--phase2-dev.azurewebsites.net/Auth"
  }

  async login(username: string, password: string) : Promise<ILoginResponse> {
    return axios.get(`${this.apiUrl}?username=${username}&password=${password}`, { timeout: 5000 }) as Promise<ILoginResponse>
  }
}


