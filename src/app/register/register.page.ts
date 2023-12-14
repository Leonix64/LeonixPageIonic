import { Component, OnInit } from '@angular/core';
import { RegistroService, Usuario } from '../services/registro.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  generos: any[] = [];

  //Propiedades del usuario
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
  }

  constructor(
    private registroService: RegistroService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerGeneros();
  }

  onSubmit() {
    if (this.usuario.password !== this.usuario.confirmPassword) {
      this.showSnackBar('Las contraseñas no coinciden', 'error');
      return;
    }
  
    this.registroService.registroUsuario(this.usuario).subscribe(
      () => {
        // Registro exitoso
        this.showSnackBarAndRedirect('Se ha registrado exitosamente.\nRedirigiendo al inicio de sesión...', 'success');
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

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  private showSnackBarAndRedirect(message: string, type: 'success' | 'error') {
    this.snackbar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar'],
    }).afterDismissed().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  
  private showSnackBar(message: string, type: 'success' | 'error') {
    this.snackbar.open(message, 'Cerrar', {
      duration: 5000,
      panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar'],
    });
  }
}
