import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ChangeDetectorRef } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

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

  showModal = false;
  modalData: any;
  GetCv: any;

  constructor(
    private cvService: CvService,
    private cdr: ChangeDetectorRef,
    public modalController: ModalController,
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

  openModal(data: any) {
    this.modalData = data;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  
}
