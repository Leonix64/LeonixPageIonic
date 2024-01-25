import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ModalImageService } from '../services/modal-image.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

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

  base64Image: string | null = null;

  mostrarAbout = false;
  mostrarFriends = false;
  mostrarPhotos = false;
  mostrarMore = false;
  mostrarData = false;

  constructor(
    private modalController: ModalController,
    private modalService: ModalImageService,
    private userService: UserProfileService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
    this.getUserImage();
  }

  getUserInfo() {
    const token = localStorage.getItem('authToken') || '';
    this.userService.getUserInfo(token).subscribe(
      (data) => {
        this.userInfo = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getUserImage() {
    const token = localStorage.getItem('authToken') || '';
    this.modalService.getUserImage(token).subscribe(
      (response) => {
        if (response.imagen) {
          this.base64Image = response.imagen;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getBase64Image(base64String: string | null): string {
    return base64String ? 'data:image/jpeg;base64,' + base64String : '';
  }

  EditImage() {
    const modal = this.modalController.create({
      component: ModalPage,
      componentProps: {
        profileImage: this.getBase64Image(this.base64Image),
      }
    });
    return modal.then(modal => modal.present());
  }

  /* Ion-card para cada seccion */
  toggleAbout() {
    this.mostrarAbout = !this.mostrarAbout;
  }

  toggleFriends() {
    this.mostrarFriends = !this.mostrarFriends;
  }

  togglePhotos() {
    this.mostrarPhotos = !this.mostrarPhotos;
  }

  toggleMore() {
    this.mostrarMore = !this.mostrarMore;
  }

  toggleData() {
    this.mostrarData = !this.mostrarData;
  }

}
