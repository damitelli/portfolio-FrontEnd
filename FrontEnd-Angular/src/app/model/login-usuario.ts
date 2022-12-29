export class LoginUsuario {
    nombreUsuario: string;
    password: string;

    constructor(data: LoginUsuario) {
        this.nombreUsuario = data.nombreUsuario;
        this.password = data.password;
    }
}