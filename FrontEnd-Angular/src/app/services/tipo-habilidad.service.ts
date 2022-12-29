import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDeHabilidadInterface } from '../model/tipo-de-habilidad-interface';

@Injectable({
  providedIn: 'root'
})

export class TipoHabilidadService {
  private urlData = 'http://localhost:8080/tipohabilidad';

  constructor(private http: HttpClient) { }

  getTipoHabilidad(): Observable<TipoDeHabilidadInterface[]> {
    return this.http.get<TipoDeHabilidadInterface[]>(this.urlData + '/list');
  }
}
