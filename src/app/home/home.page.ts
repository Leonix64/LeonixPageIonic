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

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  CerrarSesion() {
    this.loginService.removeToken();
    this.router.navigate(['/login']);

    this.showSnackBar('Sesion cerrada correctamente', 'success');
    console.log('Sesion cerrada :D');
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: 'success' ? ['success-snackbar'] : ['error-snackbar'],
    });
  }
}
