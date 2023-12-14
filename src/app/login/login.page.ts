import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, Usuario } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = {
    username: '',
    password: ''
  };

  // Variables para almacenar 
  token = '';
  rol = '';
  generos: any[] = [];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {}

  IniciarSesion() {
    this.loginService.login(this.usuario).subscribe(
      (response) => {
        this.token = response.token;
        this.loginService.setToken(this.token);
        console.log('Token de Usuario:', this.token);
        
        this.router.navigate(['/home']);
        this.showSnackBar('Inicio de sesión exitoso', 'success');
      },
      (error) => {
        this.showSnackBar('Error de inicio de sesión', 'error');
        console.log('Error de inicio de sesión', error);
      }
    );
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    const panelClass = type === 'success' ? ['success-snackbar'] : ['error-snackbar'];

    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: panelClass,
    });
  }
}
