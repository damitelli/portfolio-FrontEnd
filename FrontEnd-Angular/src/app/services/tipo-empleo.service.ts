import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDeEmpleoInterface } from '../model/tipo-de-empleo-interface';

@Injectable({
  providedIn: 'root'
})

export class TipoEmpleoService {
  private urlData = 'https://portfolio-ap-backend-qnwn.onrender.com/tipoempleo';

  constructor(private http: HttpClient) { }

  getTipoEmpleo(): Observable<TipoDeEmpleoInterface[]> {
    return this.http.get<TipoDeEmpleoInterface[]>(this.urlData + "/list");
  }
}
