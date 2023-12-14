import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public token: string | null = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  CerrarSesion() {
    this.loginService.removeToken();
    this.router.navigate(['/login']);

    this.showSnackBar('Sesión cerrada correctamente', 'success');
    console.log('Sesión cerrada :D');
  }

  GetTokenUser() {
    this.token = this.loginService.getToken() || '';
    console.log(this.token);
    this.showSnackBar('Token del usuario mostrado con fines de depuración', 'success');
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    const panelClass = type === 'success' ? ['success-snackbar'] : ['error-snackbar'];

    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: panelClass,
    });
  }
}
