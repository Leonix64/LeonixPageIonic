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
    const uploadCVEndpoint = `${this.apiUrl}/upload-cv`;

    return this.http.post<any>(uploadCVEndpoint, cvData, { headers });
  }

  getAllCVData(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const getCVDataUrl = `${this.apiUrl}/get-cv-data`;

    return this.http.get(getCVDataUrl, { headers });
  }
}

export interface CvData {
  imagen: string;
  acerca_de_mi: string;
  experiencia_laboral: string;
  habilidades_tecnicas: string;
  estudios_escolares: string;
  direccion: string;
  telefono: string;
  correo_electronico: string;
}
