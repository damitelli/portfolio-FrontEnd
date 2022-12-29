import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDeEmpleoInterface } from '../model/tipo-de-empleo-interface';

@Injectable({
  providedIn: 'root'
})

export class TipoEmpleoService {
  private urlData = 'http://localhost:8080/tipoempleo';

  constructor(private http: HttpClient) { }

  getTipoEmpleo(): Observable<TipoDeEmpleoInterface[]> {
    return this.http.get<TipoDeEmpleoInterface[]>(this.urlData + "/list");
  }
}
