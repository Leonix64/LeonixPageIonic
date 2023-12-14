import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  registroUsuario(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const signupUrl = `${this.apiUrl}/signup`;

    return this.httpClient.post(signupUrl, usuario, { headers });
  }
  
  getGeneroByToken(): Observable<any> {
    const getGeneroUrl = `${this.apiUrl}/get-generos`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.get(getGeneroUrl, { headers });
  }
}

export interface Usuario {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  nombre: string;
  apellidos: string;
  fecha_nacimiento: string;
  genero_id: number;
  numero_telefono: string;
}
