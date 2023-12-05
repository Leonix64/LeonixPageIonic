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

  //Propiedades del usuario
  usuario: Usuario = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    genero: '',
    numero_telefono: ''
  }

  constructor(
    private registroService: RegistroService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.usuario.password !== this.usuario.confirmPassword) {
      this.showSnackBar('Las contraseñas no coinciden', 'error');
      return;
    }

    this.registroService.registroUsuario(this.usuario).subscribe(
      () => {
        // Registro exitoso
        this.showSnackBarAndRedirect('Se ha registrado exitosamente.\nRedirigiendo al inicio de sesion...', 'success');
      },
      (error) => {
        // Error al registrar el usuario
        this.showSnackBar('Error al registrar el usuario', 'error');
      }
    )
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  private showSnackBarAndRedirect(message: string, type: 'success' | 'error') {
    this.snackbar.open(message, 'Cerrar', {
      duration:3000,
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
