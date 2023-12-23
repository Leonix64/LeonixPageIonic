import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RegistroService, Usuario } from '../services/registro.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  loginCardVisible = false;
  registerCardVisible = false;

  // Propiedades del usuario
  usuario: Usuario = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    genero_id: 10,
    numero_telefono: ''
  };

  // Variables para almacenar 
  token = '';
  rol = '';
  generos: any[] = [];

  constructor(
    private registroService: RegistroService,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.obtenerGeneros();
  }

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
        console.error('Error de inicio de sesión', error);
      }
    );
  }

  onSubmit() {
    if (this.usuario.password !== this.usuario.confirmPassword) {
      this.showSnackBar('Las contraseñas no coinciden', 'error');
      return;
    }
  
    this.registroService.registroUsuario(this.usuario).subscribe(
      () => {
        // Registro exitoso
        this.showSnackBar('Usuario registrado', 'success');
      },
      (error) => {
        // Error al registrar el usuario
        console.error('Error al registrar el usuario:', error);
        this.showSnackBar('Error al registrar el usuario. Por favor, inténtelo de nuevo más tarde.', 'error');
      }
    );
  }

  obtenerGeneros() {
    this.registroService.getGeneroByToken().subscribe(
      (data) => {
        this.generos = data;
      },
      (error) => {
        console.error('Error al obtener la lista de géneros:', error);
      }
    );
  }

  toggleCardLogin() {
    if (this.registerCardVisible) {
      this.registerCardVisible = false;
    }
    this.loginCardVisible = !this.loginCardVisible;
  }

  toggleCardRegister() {
    if (this.loginCardVisible) {
      this.loginCardVisible = false;
    }
    this.registerCardVisible = !this.registerCardVisible;
  }

  onSubmitTest(type: string) {
    console.log(`Formulario ${type} enviado`);
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    const panelClass = type === 'success' ? ['success-snackbar'] : ['error-snackbar'];

    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: panelClass,
    });
  }
}
