export interface JwtDtoInterface {
    token: string;
    type: string;
    nombreUsuario: string;
    authorities: string[];
}