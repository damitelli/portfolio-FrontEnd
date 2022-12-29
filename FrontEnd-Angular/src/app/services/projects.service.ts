import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsInterface } from '../model/projects-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  private urlData = 'http://localhost:8080/proyectos';

  constructor(private http: HttpClient) { }

  getProjectsData(): Observable<ProjectsInterface[]> {
    return this.http.get<ProjectsInterface[]>(this.urlData + '/list');
  }

  //////// Save methods //////////

  addProjectData(newProject: ProjectsInterface): Observable<ProjectsInterface> {
    const url = `${this.urlData + "/new"}`;
    return this.http.post<ProjectsInterface>(url, newProject, httpOptions);
  }

  updateProjectData(updatedProject: ProjectsInterface): Observable<ProjectsInterface> {
    const url = `${this.urlData + "/update"}/${updatedProject.id}`;
    return this.http.put<ProjectsInterface>(url, updatedProject, httpOptions);
  }

  deleteProjectData(project: ProjectsInterface): Observable<ProjectsInterface> {
    const url = `${this.urlData + "/delete"}/${project.id}`;
    return this.http.delete<ProjectsInterface>(url);
  }
}
