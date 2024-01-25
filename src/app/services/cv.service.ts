import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postCVData(cvData: CvData, token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const uploadCVEndpoint = `${this.apiUrl}/postCV`;

    return this.http.post<any>(uploadCVEndpoint, cvData, { headers });
  }

  updateCVData(cvData: CvData, token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const updateCVEndpoint = `${this.apiUrl}/updateCV`;

    return this.http.put<any>(updateCVEndpoint, cvData, { headers });
  }

  getCVData(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const getCVEndpoint = `${this.apiUrl}/getCV`;

    return this.http.get<any>(getCVEndpoint, { headers });
  }
}

export interface CvData {
  image: string;
  about_me: string;
  work_xp: string;
  skills: string;
  education: string;
  address: string;
  phone: string;
  email: string;
}
