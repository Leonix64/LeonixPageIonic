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
  token: string = '';
  rol: string = '';
  generos: [] = [];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  IniciarSesion() {
    this.loginService.login(this.usuario).subscribe(
      (response) => {
        this.token = response.token;
        this.loginService.setToken(this.token);
        console.log('Token de Usuario:', this.token);

        this.GetUserData();
        this.GetRolData();
        this.GetGeneroData();
        this.router.navigate(['/home']);
        this.showSnackBar('Inicio de sesion exitoso', 'success');
      },
      (error) => {
        this.showSnackBar('Error de inicio de sesion', 'error');
        console.log('Error de inicio de sesion', error);
      }
    );
  }

  private GetUserData() {
    this.loginService.getUserByToken().subscribe(
      (userData) => {
        console.log('Datos de usuario:', userData);
      },
      (error) => {
        console.error('Error al obtener datos del usuario:', error);
      }
    );
  }

  private GetRolData() {
    this.loginService.getRolByToken().subscribe(
      (rolData) => {
        if (rolData && rolData.rol) {
          this.rol = rolData.rol;
          console.log('Rol de usuario:', this.rol);
        } else {
          console.log('Respuesta del server son info del rol');
        }
      },
      (error) => {
        console.log('Error al obtener el rol del usuario', error);
      }
    );
  }

  private GetGeneroData() {
    this.loginService.getGeneroByToken().subscribe(
      (generoData) => {
        if (generoData && generoData.length > 0) {
          this.generos = generoData; // Cambiado a 'generos' en lugar de 'genero'
          console.log('Datos de géneros:', this.generos);
        } else {
          console.log('Respuesta del servidor sin información de géneros');
        }
      },
      (error) => {
        console.log('Error al obtener datos de géneros', error);
      }
    );
  }
  

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: 'success' ? ['success-snackbar'] : ['error-snackbar'],
    });
  }
}
