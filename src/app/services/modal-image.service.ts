import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalImageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  uploadImage(data: string, token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const uploadImage = `${this.apiUrl}/upload-image`;

    const requestData = { imagenBase64: data };

    return this.http.post<any>(uploadImage, requestData, { headers });
  }

  getUserImage(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const getUserImage = `${this.apiUrl}/get-user-image`;

    return this.http.get<any>(getUserImage, { headers });
  }
}
