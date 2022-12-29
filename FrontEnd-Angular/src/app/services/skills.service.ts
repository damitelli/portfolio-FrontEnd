import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsInterface } from '../model/skills-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private urlData = 'http://localhost:8080/habilidades';

  constructor(private http: HttpClient) { }

  getSkillsData(): Observable<SkillsInterface[]> {
    return this.http.get<SkillsInterface[]>(this.urlData + '/list');
  }

  //////// Save methods //////////

  addSkillData(newSkill: SkillsInterface): Observable<SkillsInterface> {
    const url = `${this.urlData + "/new"}`;
    return this.http.post<SkillsInterface>(url, newSkill, httpOptions);
  }

  updateSkillData(updatedSkill: SkillsInterface): Observable<SkillsInterface> {
    const url = `${this.urlData + "/update"}/${updatedSkill.id}`;
    return this.http.put<SkillsInterface>(url, updatedSkill, httpOptions);
  }

  deleteSkillData(skill: SkillsInterface): Observable<SkillsInterface> {
    const url = `${this.urlData + "/delete"}/${skill.id}`;
    return this.http.delete<SkillsInterface>(url);
  }
}
