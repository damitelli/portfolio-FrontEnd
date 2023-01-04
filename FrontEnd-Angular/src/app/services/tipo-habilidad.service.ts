import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDeHabilidadInterface } from '../model/tipo-de-habilidad-interface';

@Injectable({
  providedIn: 'root'
})

export class TipoHabilidadService {
  private urlData = 'https://portfolio-ap-backend-vu9q.onrender.com/tipohabilidad';

  constructor(private http: HttpClient) { }

  getTipoHabilidad(): Observable<TipoDeHabilidadInterface[]> {
    return this.http.get<TipoDeHabilidadInterface[]>(this.urlData + '/list');
  }
}
