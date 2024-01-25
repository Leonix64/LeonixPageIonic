import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { ModalController } from '@ionic/angular';
import { CvService } from '../services/cv.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.page.html',
  styleUrls: ['./cv.page.scss'],
})
export class CvPage implements OnInit {

  cvData: any = {
    image: '',
    about_me: '',
    work_xp: '',
    skills: '',
    education: '',
    address: '',
    phone: '',
    email: '',
  };

  userInfo: any = {
    nombre: '',
    apellidos: '',
  };

  constructor(
    private cvService: CvService,
    private UserProfileS: UserProfileService,
    private cdr: ChangeDetectorRef,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.mostrarCV();
    this.getUser();
  }

  cargarCV() {
    const token = localStorage.getItem('authToken') || '';

    this.cvService.postCVData(this.cvData, token).subscribe(
      (response) => {
        console.log('CV cargado con éxito', response);
        //this.mostrarCV();
      },
      (err) => {
        console.error('Error al cargar el CV', err);
      }
    );
  }

  mostrarCV() {
    const token = localStorage.getItem('authToken') || '';

    this.cvService.getCVData(token).subscribe(
      (response) => {
        this.cvData = response.cvData;
        console.log('Informacion del CV:', this.cvData);

        // Asegúrate de que cvData.image contenga la cadena de datos en base64 correcta
        // this.cvData.image = 'data:image/png;base64,' + this.cvData.image;
      },
      (err) => {
        console.error(err);
      }
    )
  }

  getUser(): void {
    const token = localStorage.getItem('authToken');

    if (token) {
      this.UserProfileS.getUserInfo(token).subscribe(
        (response) => {
          this.userInfo = response;
          console.log('Informacion del usuario:', this.userInfo);
        },
        (err) => {
          console.error(err);
        }
      )
    }
  }
}
