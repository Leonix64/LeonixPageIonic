import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registroUsuario(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const signupUrl = `${this.apiUrl}/signup`;

    return this.http.post(signupUrl, usuario, { headers });
  }

  getGeneroByToken(): Observable<any> {
    const getGeneroUrl = `${this.apiUrl}/get-generos`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get(getGeneroUrl, { headers });
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
