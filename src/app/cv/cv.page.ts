import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ChangeDetectorRef } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.page.html',
  styleUrls: ['./cv.page.scss'],
})
export class CvPage implements OnInit {

  cvData: any = {
    imagen: '',
    acerca_de_mi: '',
    experiencia_laboral: '',
    habilidades_tecnicas: '',
    estudios_escolares: '',
    direccion: '',
    telefono: '',
    correo_electronico: '',
  };

  GetCv: any;

  constructor(
    private cvService: CvService,
    private cdr: ChangeDetectorRef,
    ) { }

  ngOnInit() {
    this.mostrarCV();
  }

  cargarCV() {
    const token = localStorage.getItem('authToken') || '';

    this.cvService.postCVData(this.cvData, token).subscribe(
      (response) => {
        console.log('CV cargado con éxito', response);
        // Después de cargar, vuelve a mostrar los datos
        this.mostrarCV();
      },
      (err) => {
        console.error('Error al cargar el CV', err);
      }
    );
  }

  mostrarCV() {
    const token = localStorage.getItem('authToken') || '';
  
    this.cvService.getAllCVData(token).subscribe(
      (response) => {
        this.GetCv = response;
        console.log(this.GetCv);
        this.cdr.detectChanges();  // Forzar la actualización de la vista
      },
      (err) => {
        console.error('Error al obtener datos del CV', err);
      }
    );
  }
}
