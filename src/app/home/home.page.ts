import { Component } from '@angular/core';
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
    private snackBar: MatSnackBar
  ) {}

  GetTokenUser() {
    this.token = this.loginService.getToken() || '';
    console.log(this.token);
    this.showSnackBar('Token del usuario mostrado con fines de depuración', 'success');
  }

  VerDetallesProyecto(proyecto: string) {
    console.log(`Detalles del proyecto: ${proyecto}`);
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    const panelClass = type === 'success' ? ['success-snackbar'] : ['error-snackbar'];

    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: panelClass,
    });
  }
}
