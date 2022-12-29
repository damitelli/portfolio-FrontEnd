export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;

    constructor(data: NuevoUsuario) {
        this.nombre = data.nombre;
        this.nombreUsuario = data.nombreUsuario;
        this.email = data.email;
        this.password = data.password;
    }
}