import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000';
  private tokenKey = 'authToken';

  constructor(private httpClient: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const loginUrl = `${this.apiUrl}/login`;

    return this.httpClient.post(loginUrl, usuario, { headers });
  }

  getUserByToken(): Observable<any> {
    const token = localStorage.getItem(this.tokenKey);
    //console.log('Token en getUserByToken:', token);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + token });
    const getUserUrl = `${this.apiUrl}/get-user-by-token`;

    //console.log('Llamando la funcion getUserByToken')
    return this.httpClient.get(getUserUrl, { headers });
  }

  getRolByToken(): Observable<any> {
    const token = localStorage.getItem(this.tokenKey);
    //console.log('Token en getRolByToken:', token);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + token });
    const getRolUrl = `${this.apiUrl}/get-rol-by-token`;

    //console.log('Llamando la funcion getRolByToken')
    return this.httpClient.get(getRolUrl, { headers });
  }

  getGeneroByToken(): Observable<any> {
    const token = localStorage.getItem(this.tokenKey);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    const getGeneroUrl = `${this.apiUrl}/get-generos`;

    return this.httpClient.get(getGeneroUrl, { headers });
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}

export interface Usuario {
  username: string;
  password: string;
}