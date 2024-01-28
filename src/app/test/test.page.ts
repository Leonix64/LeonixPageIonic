import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RegistroService, Usuario } from '../services/registro.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  mostrarLogin = false;
  mostrarRegister = false;

  usuario: Usuario = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    genero_id: 10,
    numero_telefono: '',
  };

  // Variables para almacenar
  token = '';
  rol = '';
  generos: any[] = [];

  constructor(
    private router: Router,
    private toastController: ToastController,
    private registerService: RegistroService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.getGeneros();
  }

  IniciarSesion() {
    this.loginService.login(this.usuario).subscribe(
      (response) => {
        this.token = response.token;
        this.loginService.setToken(this.token);
        // console.log('Token: ' + this.token);

        this.router.navigate(['/home']);

        this.presentToast('Inicio de Sesión exitoso');
      },
      (error) => {
        this.presentErrorToast('Error al ingresar los datos, inténtelo de nuevo.');
      }
    );
  }

  Registro() {
    if (this.usuario.password !== this.usuario.confirmPassword) {
      this.presentErrorToast('Las contraseñas no coinciden');
      return;
    }

    this.registerService.registroUsuario(this.usuario).subscribe(
      () => {
        this.presentToast('Usuario registrado con éxito');
      },
      (error) => {
        this.presentErrorToast('Error al registrar el usuario. Por favor, intente de nuevo');
      }
    );
  }

  getGeneros() {
    this.registerService.getGeneroByToken().subscribe(
      (data) => {
        this.generos = data;
      },
      (error) => {
        // console.log('Error al obtener lista de géneros', error);
      }
    );
  }

  // BOTONES
  toggleLogin() {
    this.mostrarLogin = !this.mostrarLogin;
  }

  toggleRegister() {
    this.mostrarRegister = !this.mostrarRegister;
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  private async presentErrorToast(message: string) {
    const toastError = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toastError.present();
  }

}
