import IAction from "../interfaces/IAction"

export default interface IAuthAction extends IAction {
    username: string,
    password: string,
    accessToken: string,
    refreshToken: string
}