import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceInterface } from '../model/experience-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {
  private urlData = 'http://localhost:8080/experiencialaboral';

  constructor(private http: HttpClient) { }

  getExperiencesData(): Observable<ExperienceInterface[]> {
    return this.http.get<ExperienceInterface[]>(this.urlData + "/list");
  }

  //////// Save methods //////////

  addExperienceData(newExperience: ExperienceInterface): Observable<ExperienceInterface> {
    const url = `${this.urlData + "/new"}`;
    return this.http.post<ExperienceInterface>(url, newExperience, httpOptions);
  }

  updateExperienceData(updatedExperience: ExperienceInterface): Observable<ExperienceInterface> {
    const url = `${this.urlData + "/update"}/${updatedExperience.id}`;
    return this.http.put<ExperienceInterface>(url, updatedExperience, httpOptions);
  }

  deleteExperienceData(experience: ExperienceInterface): Observable<ExperienceInterface> {
    const url = `${this.urlData + "/delete"}/${experience.id}`;
    return this.http.delete<ExperienceInterface>(url);
  }
}
