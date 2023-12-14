import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  userInfo: any = {
    username: '',
    email: '',
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    genero_id: '',
    numero_telefono: '',
    rol_id: ''
  };

  constructor(
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
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
}
