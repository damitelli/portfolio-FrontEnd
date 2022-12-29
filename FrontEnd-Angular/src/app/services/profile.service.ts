import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileInterface } from '../model/profile-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private urlData = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<ProfileInterface[]> {
    return this.http.get<ProfileInterface[]>(this.urlData + '/list');
  }

  //////// Save methods //////////

  updateProfileData(updatedProfile: ProfileInterface): Observable<ProfileInterface> {
    const url = `${this.urlData + '/update'}/${updatedProfile.id}`;
    return this.http.put<ProfileInterface>(url, updatedProfile, httpOptions);
  }
}
