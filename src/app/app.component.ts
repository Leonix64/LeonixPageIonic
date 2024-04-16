import { Component } from '@angular/core';
import { UserProfileService } from './services/user-profile.service';
import { LoginService } from './services/login.service';
import { ChangeDetectorRef } from '@angular/core';
import { ModalImageService } from './services/modal-image.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  base64Image: string | null = null;

  userInfo: any = {
    username: '',
    nombre: '',
    apellidos: ''
  };

  constructor(
    private userProfile: UserProfileService,
    private loginService: LoginService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private modalImageService: ModalImageService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getUserInfo();
    //this.getUserImage();
  }

  getUserInfo(): void {
    const token = localStorage.getItem('authToken');

    if (token) {
      this.userProfile.getUserInfo(token).subscribe(
        (data) => {
          this.userInfo = data;
          this.cdr.detectChanges();
        }
      );
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

  CerrarSesion() {
    this.loginService.removeToken();
    this.router.navigate(['/auth']);

    this.showSnackBar('Sesión cerrada correctamente', 'success');
    console.log('Sesión cerrada :D');
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    const panelClass = type === 'success' ? ['success-snackbar'] : ['error-snackbar'];

    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: panelClass,
    });
  }
}
