import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDtoInterface } from '../model/jwt-dto-interface';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<NuevoUsuario> {
    return this.httpClient.post<NuevoUsuario>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDtoInterface> {
    return this.httpClient.post<JwtDtoInterface>(this.authURL + 'login', loginUsuario);
  }
}
