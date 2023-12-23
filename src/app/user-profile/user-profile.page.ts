import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ModalImageService } from '../services/modal-image.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  base64Image: string | null = null;

  userInfo: any = {
    username: '',
    email: '',
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    nombre_genero: '',
    numero_telefono: '',
    nombre_rol: '',
  };

  showEditIcon: boolean = false;

  constructor(
    private userProfileService: UserProfileService,
    private modalController: ModalController,
    private modalImageService: ModalImageService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
    this.getUserImage();
  }

  getUserInfo(): void {
    const token = localStorage.getItem('authToken');
    console.log('Token en LocalStorage: ' + token);

    if (token) {
      this.userProfileService.getUserInfo(token).subscribe(
        (data) => {
          this.userInfo = data;
          console.log('Informacion del usuario:', this.userInfo);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('No se puede encontrar el token en localStorage');
    }
  }

  private getUserImage(): void {
    const token = localStorage.getItem('authToken') || '';
    this.modalImageService.getUserImage(token).subscribe(
      (response) => {
        if (response.imagen) {
          this.base64Image = response.imagen;
        }
      },
      (error) => {
        console.error('Error al cargar la imagen del usuario:', error);
      }
    );
  }

  getBase64Image(base64String: string | null): string {
    return base64String ? 'data:image/jpeg;base64,' + base64String : '';
  }

  async openProfileImageModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        profileImage: this.userInfo.profileImage
      }
    });

    return await modal.present();
  }

}
