import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
//import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl;
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  login(usuarioLog: UsuarioAuth): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const loginUrl = `${this.apiUrl}/login`;

    return this.http.post(loginUrl, usuarioLog, { headers });
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}

export interface UsuarioAuth {
  username: string;
  password: string;
}
