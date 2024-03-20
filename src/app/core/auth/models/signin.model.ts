export class SignInRequestModel {
  username: string;
  contraseña: string;

  constructor(signInRquestModel: any) {
    this.username = signInRquestModel.username;
    this.contraseña = signInRquestModel.contraseña;
  }
}
