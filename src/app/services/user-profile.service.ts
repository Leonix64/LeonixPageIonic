import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  // Método para obtener la información del usuario
  getUserInfo(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });
    const getUserInfo = `${this.apiUrl}/get-user-info`;

    return this.http.get<any>(getUserInfo, { headers });
  }
}
