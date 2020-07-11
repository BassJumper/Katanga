import ILoginResponse from "../interfaces/ILoginResponse"
import IAuthService from "../interfaces/IAuthService"

export default class AuthService implements IAuthService {
  get apiUrl() {
    return "https://pure-energy-api--phase2-dev.azurewebsites.net/Auth"
  }

  async login(username: string, password: string) : Promise<ILoginResponse> {
    const response = await fetch(`${this.apiUrl}?username=${username}&password=${password}`);
    const responseJson = await response.json();
    return responseJson;
  }
}


