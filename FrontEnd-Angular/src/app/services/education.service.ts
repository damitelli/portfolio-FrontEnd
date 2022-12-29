import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducationInterface } from '../model/education-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EducationService {

  private urlData = 'http://localhost:8080/educacion';

  constructor(private http: HttpClient) { }

  getEducationData(): Observable<EducationInterface[]> {
    return this.http.get<EducationInterface[]>(this.urlData + '/list');
  }

  //////// Save methods //////////

  addEducationData(newEducation: EducationInterface): Observable<EducationInterface> {
    const url = `${this.urlData + '/new'}`;
    return this.http.post<EducationInterface>(url, newEducation, httpOptions);
  }

  updateEducationData(updatedEducation: EducationInterface): Observable<EducationInterface> {
    const url = `${this.urlData + '/update'}/${updatedEducation.id}`;
    return this.http.put<EducationInterface>(url, updatedEducation, httpOptions);
  }

  deleteEducationData(education: EducationInterface): Observable<EducationInterface> {
    const url = `${this.urlData + '/delete'}/${education.id}`;
    return this.http.delete<EducationInterface>(url);
  }
}
